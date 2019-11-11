import $ from 'jquery';
import 'bootstrap';
import * as Data from './lib/data';
import * as Validate from './lib/validate';
import * as Filter from './lib/filter';
import sleep from 'sleep-promise';
import * as Qs from 'qs';

$(() => {

  window.location.hash = '#speed=500';

  $('#button-go').on('click', () => {

    let length = $('#input-length').val();

    if (!Validate.isStringNumber(length)) {
      alert('Received value is wrong!');

      return false;
    }

    length = parseInt(length);

    if (!Validate.isIntInRange(length, 1, 1000)) {
      alert('Received value is wrong!');

      return false;
    } else {
      $('.row-ui').css('display', 'none');
      $('.row-grid').css('display', 'flex');
      $('.grid').css('display', 'grid');
    }

    /**
     * Returns delay fron URL hash.
     *
     * @returns {number}
     */
    function getDelay() {
      let hash = Qs.parse(window.location.hash.substring(1)),
        delay = hash.speed;

      if (!Validate.isStringNumber(delay)) {
        return 500;
      }

      delay = parseInt(delay);

      return Validate.isIntInRange(delay, 100, 2000) ? delay : 500;
    }

    /**
     * Appends item to grid with specified delay.
     *
     * @param data Data to insert into grid item.
     * @param row
     * @param column
     * @param delay Delay in milliseconds.
     */
    async function appendItemToGrid(data, row, column, delay) {
      await sleep(delay);

      $('<div></div>')
        .addClass('item')
        .css('grid-row-start', row)
        .css('grid-column-start', column)
        .text(data)
        .appendTo($('.grid'));
    }

    (async () => {

      let data =  Data.generate(length, Filter.excludeNumberWithDigit, 6),
      dataGenerator = Data.wrap(data);

      let leftCol = 0,
        rightCol = length - 1,
        topRow = 0,
        bottomRow = length - 1;

      /**
       * Fills grid by counterclockwise.
       */
      while (leftCol <= rightCol && topRow <= bottomRow) {

        /**
         * Left column.
         */
        for (let i = topRow; i <= bottomRow; i++) {

          await appendItemToGrid(dataGenerator.next().value, i + 1, leftCol + 1, getDelay());
        }

        leftCol++;

        /**
         * Bottom row.
         */
        for (let i = leftCol; i <= rightCol; i++) {

          await appendItemToGrid(dataGenerator.next().value, bottomRow + 1, i + 1, getDelay());
        }

        bottomRow--;

        /**
         * Right column.
         */
        for (let i = bottomRow; i >= topRow; i--) {

          await appendItemToGrid(dataGenerator.next().value, i + 1, rightCol + 1, getDelay());
        }

        rightCol--;

        /**
         * Top row.
         */
        for (let i = rightCol; i >= leftCol; i--) {

          await appendItemToGrid(dataGenerator.next().value, topRow + 1, i + 1, getDelay());
        }

        topRow++;
      }
    })();
  });
});
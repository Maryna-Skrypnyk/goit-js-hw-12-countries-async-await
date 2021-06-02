import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

function onSuccess(success) {
  Toastify({
    text: 'Congratulations! You have found the country!',
    duration: 2000,
    gravity: 'top', // `top` or `bottom`
    position: 'left', // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    className: 'info info-success',
    offset: {
      x: 305, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
      y: 17, // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },
  }).showToast();
}

function onFetchMore(more) {
  Toastify({
    text: 'Too many matches found. Please enter a more specific query!',
    duration: 2000,
    gravity: 'top', // `top` or `bottom`
    position: 'left', // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    className: 'info info-more',
    offset: {
      x: 305, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
      y: 17, // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },
  }).showToast();
}

function onFetchError() {
  Toastify({
    text: 'There is no such country. Enter again.',
    duration: 2000,
    gravity: 'top', // `top` or `bottom`
    position: 'left', // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    className: 'info info-error',
    offset: {
      x: 305, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
      y: 107, // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },
  }).showToast();
}

export default { onSuccess, onFetchMore, onFetchError };

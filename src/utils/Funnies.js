import { loadingmessages } from "./loadingmessages";

const copyArray = (source, array) => {
  let index = -1
  const length = source.length

  array || (array = new Array(length))
  while (++index < length) {
    array[index] = source[index]
  }
  return array
}

const sample = (array) => {
  const length = array == null ? 0 : array.length
  return length ? array[Math.floor(Math.random() * length)] : undefined
}

const shuffle = (array) => {
  const length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  let index = -1
  const lastIndex = length - 1
  const result = copyArray(array)
  while (++index < length) {
    const rand = index + Math.floor(Math.random() * (lastIndex - index + 1))
    const value = result[rand]
    result[rand] = result[index]
    result[index] = value
  }
  return result
}

class Funnies {

  constructor(messages=[], opts={}) {
    // Should messages be appended to what is already there or be used as a substitute?
    opts.appendMessages = typeof opts.appendMessages === 'undefined' ? true : opts.appendMessages;
    if (opts.appendMessages) {
      this.messages = shuffle(loadingmessages.concat(messages));
    } else {
      this.messages = shuffle(messages);
    }

    // convert messages into a map of message to how many times it has been
    // used.
    this.record = {};
    this.messages.forEach(message => {
      this.record[message] = 0;
    });
  }

  // pick the smallest of the freqencies for a message to get a more random
  // distribution
  message() {
    let smallestMessage = this.messages.reduce((smallest, message) => {
      if (this.record[smallest] > this.record[message]) {
        return message;
      } else if (this.record[smallest] === this.record[message]) {
        return sample([smallest, message]);
      } else {
        return smallest;
      }
    });

    // update the recrd to show that this message was picked
    this.record[smallestMessage] += 1;
    return smallestMessage;
  }

  messageHTML() {
    let message = this.message();
    let html = `<div class="funnies">
      <span class="loading-funny">${message}</span>
    </div>`.replace(/(\r?\n|^ +)/gm, '');
    return {message, html};
  }
}

export {
  Funnies as default,
  Funnies,
};

// for browser support
if (typeof window !== 'undefined') {
  window.Funnies = Funnies;
}
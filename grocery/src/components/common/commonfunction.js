import React from 'react'

const STRING = 'I am a dog. He is a cat.'
const MAX_LENGTH = 20
let str = ''

export const limit = () => {
  if (STRING.length > MAX_LENGTH) {
    str = STRING.substr(0, MAX_LENGTH) + '...'
  }
};
export default limit;
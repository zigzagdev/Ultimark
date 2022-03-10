import React from 'react'


const MAX_LENGTH = 20
let str = ''

export const limit = (content) => {
  if (content.length > MAX_LENGTH) {
    str = content.substr(0, MAX_LENGTH) + '...'
  }
};
export default limit;
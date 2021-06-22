import React from 'react'

interface IError {
  error: string | Error
}

const Error: React.FC<IError> = ({ error }) => {
  return (
    <div>
      <h3>Something went wrong | {error}</h3>
    </div>
  )
}

export default Error

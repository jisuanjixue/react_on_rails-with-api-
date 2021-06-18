import * as React from 'react'
import { useState, FunctionComponent } from 'react'
// @ts-ignore
import style from './Hello.module.css'

export interface Props {
}

// Note,  you need to declare the type so that ReactOnRails.register has the
// proper type.
const Hello: FunctionComponent<Props> = () => {
  const [name1, setName] = useState('')

  return (
    <div>
      <h3>Hello, {name1}!</h3>
      <hr />
      <form>
        <label className={style.bold} htmlFor="name">
          Say hello to:
          <input
            id="name"
            type="text"
            value={name1}
            onChange={(e:any) => setName(e.target.value)}
          />
        </label>
      </form>
    </div>
  )
}

export default Hello

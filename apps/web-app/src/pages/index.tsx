import {sayHello} from '@optional-package-scope/foo'
import {AsyncMessage, Message} from '@optional-package-scope/bar'

export default function Home() {
  return (
    <div>
      <h3>I'm the web-app</h3>
      <ul>
          <li>{`Foo says: ${sayHello('World')} from @optional-package-scope/foo`}</li>
          <li><Message message={'Bar react component from @optional-package-scope/bar'}/></li>
          <li><AsyncMessage apiUrl={'/api/hello'}/></li>
      </ul>
      <img src={'/images/nextjs-logo.png'} alt={'logo'} />
    </div>
  )
}

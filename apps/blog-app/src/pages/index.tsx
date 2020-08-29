import {sayHello} from '@optional-package-scope/foo'

export default function Home() {
  return (
    <div>
        <h3>I'm the blog-app</h3>
      <ul>
          <li>{`Foo says: ${sayHello('World')} from @optional-package-scope/foo`}</li>
      </ul>
      <img src={'/images/nextjs-logo.png'} alt={'logo'} />
    </div>
  )
}

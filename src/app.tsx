import { useState } from 'preact/hooks'
import { Button } from 'antd'
import { UpCircleOutlined ,LeftOutlined} from '@ant-design/icons'



export function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="card">
      
      <Button>按钮</Button>
      <UpCircleOutlined/>
      <LeftOutlined />

      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  )
}

import { GoBell, GoDatabase } from 'react-icons/go'
import Button from "./Button"


function App(){

        return <div>
            <div>
                <Button  primary className='mb-5' onclick={handleClick}>
                    <GoBell/>
                    Click here!
                    </Button>
            </div>
            <div>
                <Button  secondary>
                    <GoDatabase/>
                    Buy now!
                    </Button>
            </div>
            <div>
                <Button success  >Lest go!</Button>
            </div>
            <div>
                <Button danger>Discount!</Button>
            </div>
            <div>
                <Button warning>Sale!</Button>
            </div>
        </div>

}

export default App
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div className="App">
      


<Container>
      
      <Row>
        <Col></Col>
        <Col>
          <Card style={{ width: '25rem' }} className='mt-4'>
            <Card.Img variant="top" style={{height:'24rem'}} src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQVFBgWFhUZGRgYGiUeGhwcGhwZHB0ZHxwjGhoaHBkkJC4nHSEsHxoYJzgmKy80NTU1HSQ7QDs0Py41NTEBDAwMEA8QHhISHzQsJSs2NjQ0NDQ0NDQ0NDE0NDE0MTY3NDQ0NDQxNDU0ND00Nj80NDQ0PTQ0NDQ0NDQ0NDQ0NP/AABEIANkA6AMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcCAf/EAEUQAAICAQIEAgYIAgULBQAAAAECAAMRBBIFBiExQVETIjJhcYEHFEJScpGhwTOxYoKSk9EVFzRDU1SDorLS4SMkY3Pw/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAKxEBAQACAQQBAgMJAAAAAAAAAAECESEDEjFBBFGREzJxFCJhobHB4fDx/9oADAMBAAIRAxEAPwDrMRE8FuREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED4T5zn13FtXZpNRxJb2rrVW+rUhV2sikoLLQykszHJABGMDvL7qqyyOo7spA+JBE5zq9Sp5cXHTCV1sCCCGW9a3BHgchp0dGT+citXLmjjDaTSPqAocoVG0nbnc6oevX7xPykLxLW6nUX6laLTVTok9ZlCk26jbvCEkHCKMBgME5/KO5m4+usoVa6rBp31VKLcw2rYTYCdin1io2+0cDPSSHBjtXi1f21vscjx22VBkPzwQPhL44duO7Of+Jbmh5pNo0iJWHu1FaW2qrFVprZQWdjg+JwqnqfMd590fELbOLX1K59DRp1DL0x6Z23q3nnZkfKV36PtYmjoqS6hqxqdrJqB66OWwESxsZrYAhQp9XocHr1snK2hdL9fY6lTZqcKT9qtFAQg+I9Zh8QZGeOOO9T9PuLLEROVJERAREQEREBERAREQEREBERAREQEREBERAREQEhk5frFlpyGpv8AWs07Ir1m3IPpBkeqTt6jsT17yZiWmVnhDBfpK3VVZFZVYMoZQQrKcqwHgQex8Jo6vg4bUJqEdkcDZYAFZbas52Op8QScMOoyR2MlYiZWeDTDptMtaKiKFRRhVUYAA7ACeNHoaqt4rRU3uXfaMbnbG5j7zgTZiRupIiJAREQEREBERAREQETS4jxWjTgG65Kwe251XPwBOT8pHjm/h5VmGrqIVdxAcFsDyXufDoAe8tMMr4gnZqa7iNFA3XWpWPNmVf5nrKRqON6zWkmtm0umPssAPT2D72TkVKfDAJ/OYtLwXTodwrDP4u3ruT5l2yczTsmP5r9mmPSyyWFuedD9l3ceaUXMvyYLg/KeTz5oR7TWqPNtPcB/0TRzGZH7n0v3/wANPwP4pvR826C3ATV1EnsGcIx/qtgzc4lxfT0KGuuRFb2SzAbvwju3ylP1OgqsGHrR/wASKf1IkJqeVkVhZp2COnsqw31nxI2tkrnzXtntJmPTt82K3o2L/peatDYrMmqqIUbmy4UhR3O1sHE1q+bq3G6nT6u5PB007bT+EsV3fIGUGyijVZovqFGqUZUgDr5MjfbX+iff5ZF75O5o9Ip0+p2rqaSFbAwrqf4br0wMjw6dfLIE6On0OnlbLtnnhZ45SGh5h09qu281moZsS1TS6A9i6vjAP3u3vmmvNqWkjS0X6nBxurQLVny9K5VT8syT43y1p9XZTZais1LZ6qGDIQc1sD3Xdtb3FR5nMyiAAAAADsB0AHwms+HhLyx71bN3E3GU0umr/wDs1LsfmEqI/wCYzAW4wvU0aJx5LdaD+bJiW6Jp+z9P6I7qpTczamn/AErh16Lnq9LLqUA+8duGUfKS/COO6bVLu09yPjuoOGX8SHDL8xJ6VzjvKOm1J37TVeOq31HZYreB3D2vgf0mefxML+XhaZ/VJ2WqvtMFz2yQP5zJOd6Lh1Neq+r8VpW6244o1TZZLevSraTtpcZACqAD8cFpHVaduEurozNw92CujEsdMzHajox6+jJIBUnpnpnMxy+HZjuXdT3c6SusvsXiOnXc3o3otBXJ271atgxHYnBwD8fMyS4vrloosuYZWtGcjz2jOPn2+c96fU1WYZHR8dirK2M98EEz3qdOtiMjqGRhhlPUEHuCPKc1s3Nzwlg4PZa1FT3BRYyKzhQQoYjJABJ7Zx3m7PNjhQWYgBRkk9AAOpJ92JEcv8abVh7FpZKMgVO5w1o67nCYyq9sEnrnsJXVu8vQmYiJVJERAREQPhlb5z4+2mrRaQG1F7bKgewx7TsPELkfMjwzLJOfc0Nu4vSp7JpS6/id2Qn8gJr0pLlz65Wxm7I1dBwNEJstPpr26va/rMT/AEQfZA8MeE2ddwum5SjopHgQAGU+asOoMya6wqhIOOoG7vtBYAtj3AzZ1ulSp60QsSysXLOzZAwAcE4BJPhjxlu/K3e3VqTjTDpa2RVVnLsowWIALe8geMyxEzq5ERAREQNHi3DE1C7WyrKco49pW8GB/Lp/4kVyqLb+JLXZlbF07JeR2dFdWDL+LcvXw93aWORPE7jpb6dco/hNsuA+1Q5w3xKk5E6fj56ymNZdSXW8fLrAGJ6mOtwwBBBBGQR2IPYiZJ6TziIiAiIgRPH+DV6yh6LB6rDow9pWHsuvkQf3HYyivxV76auHasZ1C6uqm8HtbUM3LYPNXWoA+8+GROnyk808NT/KXDrwMObGRv6Sit3Un8J3f2pFTKi7OE8Ps4g+jGiRfR0iz0iFq2Db1UL6mD7Lg5z59JKHgF1ILabXXJjrsuP1msgeGGw6/JpMJw2pb31ATFrqEZ8nqinIGM4Hh1A8B5TJxB9tVjfdrY/kpMrljjfMW3WHgWs+s6Sm11XNtasy4yuWUFgAc9M56HMkxITkpMcP0g/+BD+ag/vJyeNnxlZPq0IiJUIiICIiAlF+kPSPW9OuRSwoylyjuaW+1/VJP9rPYGXqeXUEEEZBGCD1Bz4ES/Ty7ctkurtRabUtQMpDo46HwIP/AO7TzRpQhyGY4XaoY5CrnOF8QM++U3lXhFjadXq1D1MSQygBlJU4zsOOuMdZbuG6a1FItuNrE+0UVAB5AL+5m2eEx3quzG79NuIiYrkRPjMAMnoIH2IiAmPUUK6MjDKupU/AjBnm3VIrIrMod87FJwWx3wPGZpbmciW+jXWtZoERzl9OzUP/AMM4X/kKS2zn/wBH9223XqB09Ore7LIMn9BLmmrOeo6e6evjd4yvOy6d3dMH+XdL6f6t6ev03+z3jf23Yx5464746yUnJtDyDqxxX6w5U0i9rt4fLEby6Lt77slQfDGes6lptQlgLIysAxUkHIDKxVh8QwIPwkxnZJ4Z4lVfiGvXiC6fOmal0a0NtsWxa1dVK+2VLZdAD0B6nAxg176YvrITTtS1iortvNZYEOQvoydvXwfB8z7xGyTd06XKnzExPE+GIPA6hz8Fp2j9XkvwXWO2moa7pa1SGwYwRYUBcEeBznp4SF1zhuMUAddmjtcf1rET9oNWJwSq6nXanXNfp9IiLUm6qzUWFipcrh0qVerFc+0TjPyzZ7ydrbfa2nHxx0/WRn0bUqvDNNtOdyFifNmYs2ffkkfKCccsfKupZVOitUJbpURfVJKPVt2pahIzg7SCPAiWGVvjp9HxXQuB/Gqupc+5QtqA/MN+csk8r5OExz498tcbuERE50kREBERAQIiByzltDW+r056GrUvgf0HPqH4EKTJyaHNlB0nEE1P+p1QFdh8FtUYRj8VUfk5m/Ojqc2ZfV19LLeJERMmhIzmLhzajTtWjAMSpG7O04YHBxn+XfEk4k45XG7hZuaeOA8PKJXSW3bEAJ7ZwPDyHgJ75hr1KNWaLakrd0rZWpDlWckBt2fWy21dvTv3m9wk+sfw/uJoc1cRVXpq2swW2qy1hjFaC5VQt72fb0+6rHwl8N5ZMs+Iwcd4Ej30uWINR3LjsexIP9ZQf0mxJHi56qPHB/b/AMyOle62SVfFq8u6j6vrnqbqus9dG8Q9a4dD5jZ6wPxHWXiUTl6j65xFbF/g6INuYdnuddmwHx2r1OPd5jPSkoUdf5z0+lL2TblzzxmVj1UMKBOVaPQsdRrSt11Ng1dmWqs27lba6bkIKno3fGffOsznXF6vQcTsB9nV1rYnl6SsbLFHv2bGmtV+N23qay8VrppHqf06am30qoVZ7T6YMntFGU4AUEZ9Tb1lu5Z1V1mhputcs9qBycKMb/WCqFA6AEAePmTKfxxTYqaVDh9SwrGO6p3uf4Kgb5kTpNVCqoQDChQoHkAMAflIjX5cwxykxn6tCVfmKm/T3txClUsFemZLK2Yodgf0hdGCnrgdQfAdJcH0p8Osheb9cml0VzuQXdGStO5exlKogHcnJ648AY0yyyxsROk5s1DIljcN1G11DKanrtBVhkEesp6gjwjk/imy96Ep1K1WlrFWyh6zp3J3OrMRtNbMSVwcg5GCCCLLyvoGo0enrcDelSK3uYKAwz7jmSGr1SVI1jsFRAWZj0AA6kyWNsVbml88R4Yg6nfcx9yinBJ8urCWWVHlYPq77OJWKVV19HpUOQVoDZLkebt1+HmCJbp5nysplnx6aYzUIiJypIiICIiAiIgR3HuEJq6Hos9lx0I7qw6qw94IB9/ac90uus0zjS60bHAxXbn1LUHQEMftdu/zwe/U5o8W4VRqazXeiup8D3B7blYdVPvE1wzknbl4/otjlcbwq0TSu5U12l/0W1dRUO1Vp2uo+6r9j88AeUxpxJlZE1GntodztXcoZWbGSFdcg/PEten7xu/9+jpx6mNSMREzaMtFpRgw8P1HiJvWX0MG3IDvxvBQHdj2Qx8ceGZGSP4/qmq01tidGVSVOM4PbOPdmWxm7qK5Sea3uJ8QRM2WOqL5scD4DzPwlF4vzZ6ZWWpgla4DsXRbnUnDCtT26Z69T2+E6Xy/yLpa9l9xbU3EBt9p3AE4PqJ2Az2zkjwMuDVKehUEfATv6fxscebzXJn198RTuSeZOFmhKNM61bRgV2EI5J6k5Jw7HuSpMuoMhtbyvorv4mlpY+exQ39oAH9ZIaHRV0oK6kCIvsqvQD4CdTnuvTZkLzHwJNZWELMj1sGrsXG5HHiM9CCMgg9wfgZNRBLrmK3y9yuNO7XWWtfey7d7KqhUzkqiL0UE9T4nEmeIcRqoXfdYla+bsFHyz3Pum3IzinBNNeyPfTXYa87S4DAA4LdD0Psjv5QXK5XdVuznOzUk18N07Xnsb3DV6dT2zk4Z8fdGD5Zm3wflMi4arWXHU6gewSNtVWfCqvwPb1j16A9DGu5z0lT+goWzU2r09Hp037fD1mGFUD49Jq44rq/bZNBUfspi68jyLn1U+IGRM8upjj+arSX0nOPcyabRruusAY+yg9axz2AVB1PXpnt5mVcaHVcTZX1aHT6RSGTT59e0g5U3n7K9js/wBkzwjlTS6dvSKhsuPU3WsbLScYzvbscfdAk7OPq/L3xgtMZHlFAAAAAAwAOgA8ABPUROFYiIgIiICIiAiIgIiICc31uuOu1pdT/7fSEqnk95GHf3hR0H5jvJznzjy06d6q7F+sW7a0UMN43naW2jqoC7sN54kTw/Rpp6UrXAVBjJwMnxY/E5Pzm+M7ce73eJ/dr0sd3bbiAYmbqYtPqUcuFOSjlG9zAA4/IifNbphZW9Z7OhX+0MfvIjVv8AV9WlnavU4R/JbR7D/Mer8sydl7O3ViN74TX0fcS9Lw+jccOi+jfPfdWSnU+ZCg/OWX0q+YnFdPVq01Opp0+qNCFhcF2KwbeMMwz1GGXHl2nnXfXkdFu1L3Lc61oRc9CJa5wpsVBkp37Hw7ielj1cbqe3Dl0bzXSOYOK2nU6bR6d9tljektbaGKadD63Q9i7YQHB8ZaJUuTeTl0LWWG1rbLVUMxGAoUk4XJLYOR3J9kS2bhnE1jG69PURElBPDKCMEZB7z3MGoqLIyhmUsCNy4DLnpuXIIyO4yDApH0ahU091IAHoNVZV2AJCtlcnxwGx18pcZR9Xy1quHh9RotRZd6xsvou2t6XPV2VlUEPgZ7ZOPHsbTwbilepoS+s5R1yM9wezKfeCCD8J5fyellMu71W0s9N+IicqSIiAiIgIiICIiAiIgJocc1DV6a90GWSp2Tx9ZVJXp49QJvz4wBGD1Bky6o4Zwzhq6l6qwPVSsXah8ku9lgDYZ+/j3/F49Zen4MgqSsorIQNqsN+Mdvazk9e8h+W6F0ut19VY2hXQKp6kIQzL8hu6e7Etmh025d24gg+r5D5Tp62d7uPDpw/LtT6aTo9UKBkU3glFJyEsXqyr5Kw648zJ+QPPFxFddxPrJejDHuB6CSXDOJJegdGBz+efIjwPulc5bjMvuvjxdHGNAL6HrPdh6p8nHVT+YEwcva83adHb2xlH896nBz8eh+c39RqFRGdzhVGWPfA85BcvWKt+sQEbfShx4dXXLfyETnC/w5TfLJrzs1+mf/aI9Z+CgOv6zJztu+pFwoGyxMEd928EfE9Zr8dvUajSEEEix/yKYMxcU4/p7NTptO9gWiq0WWvhirOvsIcfZz7R7df6M06eNyyxsZ53UrtAlP4rc6cZ0frArdRdXt2kEbQthJbOGyVXHQYwe+ek3Txyl1DLbUwPYrYpH6Gcq5p5u9HxNbq3GpWhGVASoRHcYdVZFywAC9SW6kjPSeja4ZjbXa553DzE40fpXt/3VP71v+yef869v+6p/eN/2RuJ7K6RxnjbVarR6dQpGoawOTkkCuveNuD33Fe+egPxkq1LPsYWugU5IUJhx22tuVjj8JB984lxDn1rtRpbzpwjaZy2Q5fdW4C2LgqMHaOhzOj3c28NtqCnWKoODlbWqfod2CRtZfeOnlI2XCyLiZQfo49VdbWvsV661UHgFyMAe7/GYeYfpM01aMunb01rdECqwQMexLEDcPcuc9uneS/I3Cvq+irViS9n/q2Egqxd8McggEEDavUA+rOb5eU7NJxlnlYoiJ5i5ERAREQEREBERAREQEREDn/MXKN9d76zREu7km2l2zvBwTsY+8eyT08Og2nRp5m1CgqdDrA32lWlmA94bAOPfidOibfi7n702vjncZpxjjfCuK6ray6N0rU7kUsivnwZlLBg3kMdJFaXl3ilTFk09yk9+isD8RkgzvkS8+RZO3tmkXK27cROj4wa2qOmsKvuDbkycOSWAYt0HrHHlMWj5X4wu7ZQ67yCxL1Akqcg9Wz/AIjpO5xH7RfUh3VxZ/o84ne2601A9svZnA8gEUj5CTnCvooVWDai8uB9itdgPuLkk4+AB986bEi/Jzs1OP0Ruq5ZyNw1jk6Sv5blH5AgTWs+jrhh/wBQw+Fto/TfLZEznVznu/dCmN9GnDvuWD/iv+5j/Nnw77tn960ucR+Nn9abqnp9G3DR3qc/G2z9mE3KOReGr20qH8TO/wD1MZZIkXq533fuNLRcK09P8Kiuv8KKh/MCbsRK22+QiIkBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED/9k=' />
            <Card.Body>
              <Card.Title>
              <Button variant="primary"><h5>Sweetest Cutest bestest Miss <b style={{color:'#78ffd6'}}>Megha</b></h5></Button>
              </Card.Title>
              <Card.Text>
                <span style={{color:'#f953c6'}}> Good Afternoon <img height={20} width={20} src='https://cdn-icons-png.flaticon.com/128/11175/11175472.png' /></span> Wishing you a wonderful day ahead.<img height={20} width={20} src='https://cdn-icons-png.flaticon.com/128/2278/2278992.png' />
                Work Hard Stay Healthy , Keep Smiling .
                Take Care.
                Isn't this enough to prove how beautifully strong you are ,despite the hurdles you came this far,your scars have itched stars
                  <img height={20} width={20} src='https://cdn-icons-png.flaticon.com/128/1985/1985836.png' />
                This is a little effort to make you smile Hope you like it <img height={20} width={20} src='https://cdn-icons-png.flaticon.com/128/3670/3670159.png' />
              
              
              </Card.Text>
              
            
              <ListGroup>
              <ListGroup.Item variant="info">
                  Chashme se better hota hain vision...
                  <p>
                  If being Cutie was a crime, you'd be in prison..

                  </p>
            </ListGroup.Item>
              </ListGroup>
              
            </Card.Body>
          </Card>

       </Col>
        <Col></Col>
      </Row>
</Container>


         
    </div>
  );
}

export default App;

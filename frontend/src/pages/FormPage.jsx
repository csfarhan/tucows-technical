import {Container} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import Card from '../components/Card'
import {v4 as uuidv4} from 'uuid'

function FormPage() {
    const [name, setName] = useState('');
    const [food, setFood] = useState('');
    const [users, setUsers] = useState([]);
    const [firstLoad, setFirstLoad] = useState(true);
    useEffect(()=>{
        if(!firstLoad){
            localStorage.setItem("users", JSON.stringify(users));
        }
        else{
            setFirstLoad(false);
        }
        
    }, [users]);


    useEffect(()=>{
        //Get the users from local storage
        let rawUsers = localStorage.getItem('users');
        let parsedUsers = eval(rawUsers);
        if(parsedUsers)
            setUsers(parsedUsers); 
    }, [])

    const handleDelete = (id) =>{
        const newUsers = users.filter(user => user.id !== id);
        setUsers(newUsers);
    }

    const userList = users.map((user) =>{
        return(<Card id={user.id} name={user.name} food={user.food} handleDelete={handleDelete}/>)
    })

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleFood = (e) => {
        setFood(e.target.value);
    }
    const handleSubmit = event => {
        event.preventDefault();
        setUsers([...users, {id: uuidv4(), name: name, food: food}]);
    };
    return (
        <div style={{height: "100vh", backgroundColor: "#87609f", display:'flex', flexDirection: 'column'}}>
            <div className ="local-board-desc-cont" style={{width: '900px', color: 'white', fontSize:'40px', display:'flex',justifyContent: 'center'}}>
                <div>
                    You are in the Local User Board
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <br/>
                <Container>
                <div className="form-group">
                    <label style={{color: "white"}}>Full Name:</label>
                    <input value={name} type="name" className="form-control" placeholder="Enter name" onChange={handleName}/>
                </div>
                <br/>
                <div class="form-group">
                    <label style={{color: "white"}}>Favourite Food:</label>
                    <input value={food}  className="form-control"  placeholder="Enter Favourite Food" onChange={handleFood}/>
                </div>
                <br/>
                <button type="submit" className="btn btn-primary">Submit</button>
                </Container>
            </form>
            <br/>
            <div className='user-list-cont-cont' style={{width:'100%', display:'flex', justifyContent:'center'}}>
                <div className = "user-list-cont" style={{display: 'flex' ,flexDirection:'column', overflow:'auto', width: '318px',height:'500px', minHeight: '500px'}}>
                    {userList}
                </div>
            </div>

        </div>
    )
}

export default FormPage;
import {Container} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import Card from '../components/Card'
import {parse, v4 as uuidv4} from 'uuid'
import axios from 'axios';

function GlobalPage() {
    const [name, setName] = useState('');
    const [food, setFood] = useState('');
    const [users, setUsers] = useState([]);
    const [firstLoad, setFirstLoad] = useState(true);
    const HOST_URL = "http://localhost:5001";


    useEffect(()=>{
        //Get the users from database
        //TODO
        const getUsers = async() =>{
            const data = await axios.get(HOST_URL + "/data");
            const parsedData = eval(data.data);
            setUsers(parsedData);
        }
        getUsers();
    }, [])

    const handleDelete = (id) =>{
        const newUsers = users.filter(user => user.userId !== id);
        setUsers(newUsers);
        //DELETE THE USER FROM DATABASE TODO
        axios.delete(HOST_URL + "/data/deleteUser", {data: {userId: id}});
    }

    const userList = users.map((user) =>{
        return(<Card id={user.userId} name={user.name} food={user.favFood} handleDelete={handleDelete}/>)
    })

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleFood = (e) => {
        setFood(e.target.value);
    }
    const handleSubmit = event => {
        event.preventDefault();
        const userToAdd = {userId: uuidv4(), name: name, favFood: food};
        setUsers([...users, userToAdd]);
        //ADD USER TO THE DATABASE
        axios.put(HOST_URL + '/data/putUsers', userToAdd);
    };
    return (
        <div style={{height: "100vh", backgroundColor: "#87609f", display:'flex', flexDirection: 'column'}}>
            <div className ="local-board-desc-cont" style={{width: '900px', color: 'white', fontSize:'40px', display:'flex',justifyContent: 'center'}}>
                <div>
                    You are in the Global User Board
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

export default GlobalPage;

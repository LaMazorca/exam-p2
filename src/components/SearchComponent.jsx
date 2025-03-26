import React, {useState, useEffect} from 'react'

const SearchComponent = () => {
    //hooks useState
    
    const [search, setSearch] = useState('')
    const [users, setUsers] = useState([])
    const [text, setText] = useState(true)

    //API call

    const URL = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() => {
        const showData = async () => {
            try{
                const response = await fetch(URL)
                const data = await response.json()
                //console.log(data)
                setUsers(data)
            } catch (error) {
                console.error('Error fetching data', error)
            }
        }
        showData()
    }, [])

    //Searching
    
    const searcher = (e) => {
        setSearch(e.target.value)
    }

    const look = () => {
        setText(!text)
        alert('Los correos son información delicada y su uso es restringido. Por favor, no los compartas con nadie.')
    }

    //Filtering

    const results = !search ? users : users.filter((dato) => dato.name.toLowerCase().includes(search.toLocaleLowerCase()));

    //Alert
    


    //Rendering
    return (
    <div>
        <a href='https://postimg.cc/WhDJYfXW' target='_blank'><img src='https://i.postimg.cc/WhDJYfXW/Logo-2-mazorca.png' border='0' alt='Logo-2-mazorca' className='my-0 mx-auto size-20 hover:size-22 duration-300 ease-in-out'/></a>
        <div className='flex flex-row justify-around p-1.5'>
            <input type='text' placeholder='Nombre...' onChange={searcher} value={search} autoComplete='off' className="bg-lime-200 text-lime-600 font-mono ring-1 ring-lime-400 focus:ring-2 focus:ring-lime-400 outline-none duration-300 placeholder:text-lime-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-lime-400"/>
            <button onClick={look} className="bg-lime-950 text-lime-400 border border-lime-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"><span className="bg-lime-400 shadow-lime-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]" />{text ? 'Ver correos' : 'Ocultar correos'}</button>
        </div>
        <table className='my-4 mx-auto w-4/5 table-auto border-collapse border border-lime-950 rounded-lg'>
            <thead className='bg-lime-950 text-lime-400'>
                <tr>
                    <th className='border border-lime-400'>Nombre</th>
                    <th className='border border-lime-400'>Usuario</th>
                    <th className='border border-lime-400'>Correo</th>
                </tr>
            </thead>
            <tbody className='bg-lime-200 text-lime-600 font-mono'>
                {results.map((user) => {
                    return (
                        <tr key={user.id}>
                            <td className='border border-lime-950 px-1.5'>{user.name}</td>
                            <td className='border border-lime-950 px-1.5'>{user.username}</td>
                            <td className='border border-lime-950 px-1.5'>{text ? '*****' : user.email}</td>                
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
)
}

export default SearchComponent

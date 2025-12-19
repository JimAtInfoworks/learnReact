export default function ListRender () {
    const cars = [
        { title : 'Honda Civic Type R', engine : 'K20C1'},
        { title : 'Toyota GR86', engine : 'FA24'},
        { title : 'Mazda 6', engine: 'Skyactiv-G 2.5L'}
    ]

    const listCars = cars.map(car => 
        <li key={car.engine}>
            {car.title}
        </li>
    )
    
    return (
        <>
            <ol>{listCars}</ol>
        </>
    )
}
import Link from "./Link"

function Sidebar(){

    const links = [
        {label: "Dropdown", path: "/"},
        {label: "Accordion", path: "/accordion"},
        {label: "Buttons", path:"/buttons"},
        {label: "Modal", path:"/modal"}

    ]

    const renderedLinks = links.map((link) => {

        return <Link className='mb-1 ml-3' key={link.label} to={link.path} 
                    activeClassName='font-bold border-l-4 border-blue-500 pl-2'>
            {link.label}
            </Link>

    })


    return (
        <div className="sticky top-0 overlow-y-scroll flex flex-col items-start">
            {renderedLinks}
        </div>
    )

}

export default Sidebar
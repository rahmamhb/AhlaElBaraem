const Pagination = ({ childPerPage, TotalChildren, paginate }) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(TotalChildren / childPerPage); i++) {
        pageNumber.push(i);
    }
    return (
        <nav>
            <ul className="flex list-none rounded-md bg-white pl-0 text-base text-primary">
                {pageNumber.map((number) => {
                    return (
                        <li className="list-item" key={number}>
                            <a
                                onClick={() => paginate(number)}
                                href="#!"
                                className="relative block border border-gray-light px-3 py-1.5 text-primary no-underline transition-colors duration-150 ease-in-out hover:bg-gray-100 hover:border-gray-100 focus:bg-gray-100 active:bg-primary active:border-primary active:text-white"
                            >
                                {number}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Pagination;

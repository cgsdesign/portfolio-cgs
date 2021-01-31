//import './style.css';
//import logo from './logo.png';

function Navtabs(props) {

  const tabs = ['About', 'Works', 'Resume', 'Contact'];
  return (
    <div>
      <ul className="nav nav-tabs">
        {tabs.map(tab => (
          <li className="nav-item" key={tab}>
            <a
              href={'#' + tab.toLowerCase()}
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? 'nav-link active' : 'nav-link'
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navtabs;

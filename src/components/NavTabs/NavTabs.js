import './style.css';

function NavTabs(props) {
  const tabs = ['Home', 'About', 'Works', 'Contact'];
  return (
    <header>
      <h2>CG Sibey Design</h2>
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
    </header>
  );
}

export default NavTabs;

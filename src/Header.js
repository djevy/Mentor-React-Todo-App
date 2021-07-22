const Header = ({themeToggle}) => {
    return (  
        <header id="pageTitle">
            <div id="todo"><h1>T O D O</h1></div>
            <div><img id="mode" src="images/icon-sun.svg" alt="" 
            onClick={themeToggle}/></div>
        </header>
    );
}
 
export default Header;
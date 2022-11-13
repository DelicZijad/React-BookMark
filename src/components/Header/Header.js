import Hero from '../../images/illustration-hero.svg'
function Header(){
    return (
        <header className='header'>
     <section className="container header--container">
                <div className="header--hero"><img src={Hero} alt="Illustration" /></div>
         <div className="header--txt flexCol">
                <h1 className="fs-heading-primary">A Simple Bookmark Manager</h1>
                <p className="header--para txtGray">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
</p>
<div className="header--contentBtns">
    <a href="#" className="btnBlue header--getIt">Get it on Chrome</a>
    <a href="#" className="btnGray header--getIt">Get it on Firefox</a>
</div>
            </div>
        </section>
     
    
        </header>
    )
}
export default Header;
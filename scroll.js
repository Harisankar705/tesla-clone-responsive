document.lastScrollPosition=0;
document.addEventListener(type:'scroll',listener:()=>{
    const direction=window.pageYOffset-document.lastScrollPosition > 0 ? 'down':'up';
    const sections=[...document.querySelectorAll('section')];
    sections.forEach(section,index:number)=>
{
    if(window.pageYOffset===section.OffsetTop)
    {
        document.lastCentered=index;
    }
})
   document.lastScrollPosition = window.pageYOffset;
})
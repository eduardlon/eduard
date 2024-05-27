export function TwitterFollowCard ({children,userName,isfollowing}){
 
  return(

<article className='tw-followCard' >
<header className='tw-followCard-header'>

<img className='tw-followCard-avatar'
alt="El avatar de midudev"
src={`https://unavatar.io/${userName}`}  />
<div className="tw-followCard-info" >
 <strong>{children}</strong>
 <span className="tw-followCard-infousername" >@{userName}</span>

</div>
   </header>

<aside>
    <button className="tw-followCard-button">
        Seguir
    </button>
</aside>

</article>

  )  
}
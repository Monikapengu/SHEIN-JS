export function initHeader(div) {

  div.innerHTML = ` 

  <div class="header__top">
  <div class="header__container container">
      <div class="header__contact">
          <span> (+39)- 3711128335</span>

          <span>Our Location</span>
      </div>
      <p class="header__alert-news">
          18% DI SCONTI - SPEDICIONE GRATIS 
      </p>
      <a href="login-register.html" class="header__top-action">
          Log In / Sign Up
      </a>
  </div>
</div>

 <nav class="navbar navbar-expand-lg" id="nav-menu">
        <div class="container">
          <a class="navbar-brand" href="index.html" id="logo"><span>SHEIN</span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span><i class="fa-solid fa-bars"></i></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link active-link" href="index.html">Home</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link active-link" href="shop.html">Shop</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="accounts.html">My Account</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="compare.html">Compare</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active-link" href="login-register.html">Login</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="text" placeholder="Search for items">
              <button class="btn btn-primary" type="button">Search</button>
              </form>

              <div class="header__user-actions">
            <a href="wishlist.html" class="header__action-btn">
            <ul>
            <i class="bi bi-heart"></i>
             </ul>
              </a>
              <a href="cart.html" class="header__action-btn">
              <ul>
              <i class="bi bi-bag-check"></i>
               </ul>
             </a>
              </div>

          </div>
        </div>
      </nav>
` ;
}
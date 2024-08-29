import React from 'react';
import style from './style.module.scss';

function UiPage() {
  return (
    <div className={style.container}>
      <section
        className={style.masthead}
        role="img"
        aria-label="Image Description"
        id="top"
      >
        <h1>Pure CSS Back To Top</h1>
        <button className="btn btn-primary">
          Scroll Down to See the Magic
        </button>
      </section>
      <article>
        <div className="back-top">
          <a href="#top" className="chevron-icon up circle back-top-link"></a>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet
          non curabitur gravida arcu ac tortor. Metus dictum at tempor commodo
          ullamcorper. Blandit massa enim nec dui nunc mattis enim ut. Vitae
          suscipit tellus mauris a diam maecenas. Vel facilisis volutpat est
          velit. Montes nascetur ridiculus mus mauris vitae. Eu feugiat pretium
          nibh ipsum consequat nisl. Enim tortor at auctor urna. Nibh nisl
          condimentum id venenatis a condimentum. Varius sit amet mattis
          vulputate.
        </p>
        <p>
          Eu non diam phasellus vestibulum lorem. Sed tempus urna et pharetra.
          Vel pretium lectus quam id. Nullam non nisi est sit amet facilisis
          magna etiam. Vitae semper quis lectus nulla at. Commodo nulla facilisi
          nullam vehicula ipsum a. Tristique sollicitudin nibh sit amet commodo.
          Ultrices mi tempus imperdiet nulla. A condimentum vitae sapien
          pellentesque habitant morbi. Mi eget mauris pharetra et.
        </p>
        <p>
          Ac tortor dignissim convallis aenean et tortor at. Pulvinar
          pellentesque habitant morbi tristique senectus. Sed pulvinar proin
          gravida hendrerit lectus a. Maecenas accumsan lacus vel facilisis
          volutpat. Suspendisse faucibus interdum posuere lorem ipsum dolor sit.
          Vitae justo eget magna fermentum iaculis eu non diam. Dis parturient
          montes nascetur ridiculus mus mauris vitae. Amet commodo nulla
          facilisi nullam vehicula ipsum a arcu. A lacus vestibulum sed arcu.
          Lectus sit amet est placerat in egestas erat imperdiet. Parturient
          montes nascetur ridiculus mus mauris vitae ultricies. Penatibus et
          magnis dis parturient montes nascetur ridiculus mus. Arcu cursus vitae
          congue mauris. Elementum pulvinar etiam non quam lacus. Est
          pellentesque elit ullamcorper dignissim. Quis imperdiet massa
          tincidunt nunc pulvinar. In hendrerit gravida rutrum quisque non.
        </p>
        <p>
          Interdum velit laoreet id donec ultrices tincidunt arcu non. Cursus in
          hac habitasse platea dictumst quisque sagittis purus. Purus viverra
          accumsan in nisl nisi. Nulla porttitor massa id neque aliquam. Donec
          pretium vulputate sapien nec sagittis aliquam malesuada. Mauris
          ultrices eros in cursus turpis massa tincidunt dui ut. Etiam erat
          velit scelerisque in dictum non consectetur a. Faucibus in ornare quam
          viverra orci sagittis. Montes nascetur ridiculus mus mauris vitae
          ultricies leo. Neque sodales ut etiam sit amet nisl. Eu ultrices vitae
          auctor eu augue ut lectus arcu bibendum. Egestas sed sed risus pretium
          quam. Lobortis feugiat vivamus at augue eget arcu dictum. Amet mattis
          vulputate enim nulla aliquet porttitor lacus. Proin libero nunc
          consequat interdum varius. Viverra aliquet eget sit amet. Sit amet est
          placerat in egestas erat imperdiet. Eget nunc lobortis mattis aliquam
          faucibus purus in massa tempor. At consectetur lorem donec massa.
          Pharetra diam sit amet nisl suscipit adipiscing bibendum est.
        </p>
        <p>
          Amet mauris commodo quis imperdiet massa tincidunt. Quam nulla
          porttitor massa id neque. Pellentesque diam volutpat commodo sed
          egestas egestas fringilla. Ac auctor augue mauris augue neque gravida
          in. Et malesuada fames ac turpis egestas maecenas. Pretium fusce id
          velit ut tortor pretium. Sagittis aliquam malesuada bibendum arcu
          vitae elementum curabitur vitae nunc. Ligula ullamcorper malesuada
          proin libero nunc. Pharetra magna ac placerat vestibulum lectus. Neque
          vitae tempus quam pellentesque nec nam aliquam sem et. Cursus euismod
          quis viverra nibh cras pulvinar. Sed tempus urna et pharetra pharetra
          massa. Sed lectus vestibulum mattis ullamcorper velit sed. Hac
          habitasse platea dictumst quisque sagittis purus sit. Tellus in metus
          vulputate eu scelerisque.
        </p>
      </article>
      <ul className="accordion">
        <li className="accordion-item" id="item1">
          <a href="#item1">
            Item 1<i className="chevron-icon down circle accordion-toggle"></i>
          </a>
          <div className="accordion-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam
              dignissim diam quis enim. Ut lectus arcu bibendum at varius vel
              pharetra vel turpis.
            </p>
          </div>
        </li>
        <li className="accordion-item" id="item2">
          <a href="#item2">
            Item 2<i className="chevron-icon down circle accordion-toggle"></i>
          </a>
          <div className="accordion-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam
              dignissim diam quis enim. Ut lectus arcu bibendum at varius vel
              pharetra vel turpis.
            </p>
          </div>
        </li>
        <li className="accordion-item" id="item3">
          <a href="#item3">
            Item 3<i className="chevron-icon down circle accordion-toggle"></i>
          </a>
          <div className="accordion-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam
              dignissim diam quis enim. Ut lectus arcu bibendum at varius vel
              pharetra vel turpis.
            </p>
          </div>
        </li>
        <li className="accordion-item" id="item4">
          <a href="#item4">
            Item 4<i className="chevron-icon down circle accordion-toggle"></i>
          </a>
          <div className="accordion-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam
              dignissim diam quis enim. Ut lectus arcu bibendum at varius vel
              pharetra vel turpis.
            </p>
          </div>
        </li>
      </ul>
      <div className="space-y-4">
        <div className="alert alert-primary">
          Anim ea occaecat fugiat laborum consectetur amet.
          <a className="close-icon"></a>
        </div>
        <div className="alert alert-secondary">
          Anim ea occaecat fugiat laborum consectetur amet.
          <a className="close-icon"></a>
        </div>
        <div className="alert alert-info">
          Anim ea occaecat fugiat laborum consectetur amet.
          <a className="close-icon"></a>
        </div>
        <div className="alert alert-success">
          Anim ea occaecat fugiat laborum consectetur amet.
          <a className="close-icon"></a>
        </div>
        <div className="alert alert-warning">
          Anim ea occaecat fugiat laborum consectetur amet.
          <a className="close-icon"></a>
        </div>
        <div className="alert alert-danger">
          Anim ea occaecat fugiat laborum consectetur amet.
          <a className="close-icon"></a>
        </div>
      </div>

      <div>
        <div>
          <span className="avatar">
            <img
              src="https://assets.codepen.io/1256482/internal/avatars/users/default.png?format=auto&height=80&version=1568462706&width=80"
              alt=""
            />
          </span>
        </div>
        <div className="mt-4 space-x-2">
          <span className="avatar avatar-primary">
            <div className="fab fa-codepen"></div>
          </span>
          <span className="avatar avatar-secondary">
            <div className="fab fa-codepen"></div>
          </span>
          <span className="avatar avatar-info">
            <div className="fab fa-codepen"></div>
          </span>
          <span className="avatar avatar-warning">
            <div className="fab fa-codepen"></div>
          </span>
          <span className="avatar avatar-danger">
            <div className="fab fa-codepen"></div>
          </span>
        </div>
        <div className="mt-4 -space-x-4">
          <span className="avatar avatar-primary">
            <div className="fab fa-codepen"></div>
          </span>
          <span className="avatar avatar-secondary">
            <div className="fab fa-codepen"></div>
          </span>
          <span className="avatar avatar-info">
            <div className="fab fa-codepen"></div>
          </span>
          <span className="avatar avatar-warning">
            <div className="fab fa-codepen"></div>
          </span>
          <span className="avatar avatar-danger">
            <div className="fab fa-codepen"></div>
          </span>
        </div>
      </div>
      <div className="back-top">
        <a href="#top" className="chevron-icon up circle back-top-link"></a>
      </div>

      <button
        className="btn btn-primary"
        data-badge="666"
        style={
          { '--badge-color': 'var(--danger-color)' } // as React.CSSProperties
        }
      >
        Badge
      </button>
      <ul className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Pens</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Loved</a>
        </li>
      </ul>
      <div>
        <div className="btn-group">
          <button className="btn btn-primary">Prev</button>
          <button className="btn btn-primary">Next</button>
        </div>
        <div className="btn-group">
          <button className="btn btn-primary">Copy</button>
          <button className="btn btn-primary">Paste</button>
          <button className="btn btn-primary">Delete</button>
        </div>
        <div className="btn-group">
          <button className="btn btn-primary">1</button>
          <button className="btn btn-primary">2</button>
          <button className="btn btn-primary">3</button>
          <button className="btn btn-primary">4</button>
          <button className="btn btn-primary">5</button>
        </div>
      </div>
      <div>
        <div className={style.buttons}>
          <button className="btn">Default</button>
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-success">Success</button>
          <button className="btn btn-info">Info</button>
          <button className="btn btn-warning">Warning</button>
          <button className="btn btn-danger">Danger</button>
          <button className="btn btn-primary btn-round">Round</button>
          <button className="btn btn-primary btn-circle">C</button>
          <button className="btn btn-primary disabled">Disabled</button>
          <button className="btn btn-primary loading">Loading</button>
          <button className="btn btn-primary btn-ghost">Ghost</button>
          <button className="btn btn-primary">
            <div className="inline-flex items-center space-x-2">
              <i className="plus-icon"></i>
              <div>Icon</div>
            </div>
          </button>
          <button className="btn btn-primary btn-dashed">Dashed</button>
          <button className="btn btn-primary btn-link">Link</button>
        </div>
      </div>

      <div className="card p-9 shadow-xl">
        <ul className={style['progress-list']}>
          <li className={style['progress-list__item']}>
            <div className={style['weekday-abbr']}>MO</div>
            <progress className="progress-bar" max="145" value="109"></progress>
          </li>
          <li className={style['progress-list__item']}>
            <div className={style['weekday-abbr']}>TU</div>
            <progress className="progress-bar" max="145" value="74"></progress>
          </li>
          <li className={style['progress-list__item']}>
            <div className={style['weekday-abbr']}>WE</div>
            <progress className="progress-bar" max="145" value="55"></progress>
          </li>
          <li className={style['progress-list__item']}>
            <div className={style['weekday-abbr']}>TH</div>
            <progress className="progress-bar" max="145" value="118"></progress>
          </li>
          <li className={style['progress-list__item']}>
            <div className={style['weekday-abbr']}>FR</div>
            <progress className="progress-bar" max="145" value="90"></progress>
          </li>
          <li className={style['progress-list__item']}>
            <div className={style['weekday-abbr']}>SA</div>
            <progress className="progress-bar" max="145" value="116"></progress>
          </li>
          <li className={style['progress-list__item']}>
            <div className={style['weekday-abbr']}>SU</div>
            <progress className="progress-bar" max="145" value="72"></progress>
          </li>
        </ul>
      </div>

      <div className="carousel">
        <div className="carousel-indicators">
          <a href="#slide-1" className="carousel-link active"></a>
          <a href="#slide-2" className="carousel-link"></a>
          <a href="#slide-3" className="carousel-link"></a>
        </div>
        <div className="carousel-inner">
          <img
            src="https://i.loli.net/2019/11/16/cqyJiYlRwnTeHmj.jpg"
            alt="img1"
            className="carousel-item"
            id="slide-1"
          />
          <img
            src="https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg"
            alt="img2"
            className="carousel-item"
            id="slide-2"
          />
          <img
            src="https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg"
            alt="img3"
            className="carousel-item"
            id="slide-3"
          />
        </div>
      </div>

      <form>
        <div className="form-check">
          <input
            type="checkbox"
            name="hobby"
            className="form-check-input bounce"
            id="anime"
          />
          <label className="form-check-label" htmlFor="anime">
            Anime
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            name="hobby"
            className="form-check-input bounce"
            id="manga"
          />
          <label className="form-check-label" htmlFor="manga">
            Manga
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            name="hobby"
            className="form-check-input bounce"
            id="disabled"
            disabled
          />
          <label className="form-check-label" htmlFor="disabled">
            Disabled
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            name="hobby"
            className="form-check-input bounce"
            id="disabled-checked"
            disabled
            checked
          />
          <label className="form-check-label" htmlFor="disabled-checked">
            Default
          </label>
        </div>
      </form>

      {/* <div class="dialog">
    <div class="text-center space-y-2">
      <div class="font-bold text-lg">
        Konosuba
      </div>
      <div>
        Kono subarashi sekai ni shufuku wo!
      </div>
      <div>
        <button class="btn btn-primary">
          Confirm
        </button>
        <button class="btn">
          Cancel
        </button>
      </div>
    </div>
    <div class="close-icon"></div>
  </div>
  <div class="backdrop"></div>
  
   */}
      <div>
        <hr className="divider" />
        <hr
          className="divider"
          style={
            {
              '--divider-text': '"left"',
              '--divider-text-align': 'left',
            } // as React.CSSProperties
          }
        />
        <hr
          className="divider"
          style={
            {
              '--divider-text': '"center"',
              '--divider-text-align': 'center',
            } // as React.CSSProperties
          }
        />
        <hr
          className="divider"
          style={
            {
              '--divider-text': '"right"',
              '--divider-text-align': 'right',
            } //as React.CSSProperties
          }
        />
      </div>

      <div className="dropdown">
        <a className="dropdown-toggle" href="#">
          Hover Me
        </a>
        <ul className="dropdown-menu">
          <li className="dropdown-item">
            <a href="#">Menu Item 1</a>
          </li>
          <li className="dropdown-item">
            <a href="#">Menu Item 2</a>
          </li>
          <li className="dropdown-item">
            <a href="#">Menu Item 3</a>
          </li>
        </ul>
      </div>

      <form
        className="register-form"
        action="javascript:void(0);"
        onSubmit={(e) => {
          alert(
            `Form Data:\n${JSON.stringify(Object.fromEntries(new FormData(e.currentTarget)))}`,
          );
        }}
      >
        <div className="title-area">Form</div>
        <div className="login-switch-area">
          Already have a account? <a href="#">Log in.</a>
        </div>
        <div className="form-control-area">
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="John"
              name="first-name"
              pattern="^[a-zA-Z0-9_-]{1,16}$"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Doe"
              name="last-name"
              pattern="^[a-zA-Z0-9_-]{1,16}$"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              className="form-control"
              placeholder="13063509527"
              name="phone"
              pattern="^\+?(\d.*){3,}$"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="2582347430@qq.com"
              name="email"
              pattern='^(([^<>()[\]\\.,;:\s@\"]+(\.[^<
      />()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder=" "
              name="password"
              pattern="(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder=" "
              required
            />
          </div>
        </div>
        <div className="form-check-area">
          <div className="form-check">
            <input
              type="checkbox"
              id="receive-email"
              className="form-check-input bounce"
              name="receive-email"
            />
            <label htmlFor="receive-email" className="form-check-label">
              Yes, I want to receive alphardex's emails
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              id="agree-terms"
              className="form-check-input bounce"
              name="agree-terms"
              required
            />
            <label htmlFor="agree-terms" className="form-check-label">
              I agree to the <a href="#">Terms, Privacy Policy</a> and
              <a href="#">Fees</a>
            </label>
          </div>
        </div>
        <div className="form-submit-area">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>

      <div className="flex space-x-4">
        <a
          className="gauge gauge-primary"
          href="#"
          style={
            {
              '--gauge-value': 900,
              '--gauge-max-value': 1000,
            } //as React.CSSProperties
          }
        ></a>
        <a
          className="gauge gauge-secondary"
          href="#"
          style={
            {
              '--gauge-value': 800,
              '--gauge-max-value': 1000,
            } //as React.CSSProperties
          }
        ></a>
        <a
          className="gauge gauge-success"
          href="#"
          style={
            {
              '--gauge-value': 700,
              '--gauge-max-value': 1000,
            } //as React.CSSProperties
          }
        ></a>
        <a
          className="gauge gauge-info"
          href="#"
          style={
            {
              '--gauge-value': 600,
              '--gauge-max-value': 1000,
            } //as React.CSSProperties
          }
        ></a>
        <a
          className="gauge gauge-warning"
          href="#"
          style={
            {
              '--gauge-value': 500,
              '--gauge-max-value': 1000,
            } //as React.CSSProperties
          }
        ></a>
        <a
          className="gauge gauge-danger"
          href="#"
          style={
            {
              '--gauge-value': 400,
              '--gauge-max-value': 1000,
            } //as React.CSSProperties
          }
        ></a>
      </div>

      <div>
        <a className="close-icon"></a>
        <div className="flex items-center space-x-2">
          <a className="chevron-icon up"></a>
          <a className="chevron-icon right"></a>
          <a className="chevron-icon down"></a>
          <a className="chevron-icon left"></a>
          <a className="chevron-icon up circle"></a>
          <a className="chevron-icon right circle"></a>
          <a className="chevron-icon down circle"></a>
          <a className="chevron-icon left circle"></a>
        </div>
        <div>
          <a className="search-icon"></a>
        </div>
        <div className="flex items-center space-x-2">
          <a className="plus-icon"></a>
          <a className="minus-icon"></a>
          <a className="plus-icon circle"></a>
          <a className="minus-icon circle"></a>
        </div>
      </div>

      <div className="form-group">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            name="torrent"
            id="torrent"
            placeholder="Search torrents"
          />
          <button className="btn btn-primary">Search</button>
        </div>
      </div>

      <div className="form-input-material">
        <input
          className="form-control-material"
          type="email"
          name="email"
          id="email"
          placeholder=" "
          autoComplete="off"
        />
        <label htmlFor="email">Email</label>
      </div>

      <div className="input-group input-spinner">
        <button
          className="btn minus"
          onClick={() => document.querySelector('#count').value--}
        >
          <i className="minus-icon"></i>
        </button>
        <input type="text" className="form-control" id="count" />
        <button
          className="btn plus"
          onClick={() => document.querySelector('#count').value++}
        >
          <i className="plus-icon"></i>
        </button>
      </div>

      <form>
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-2">
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col space-y-2">
                <label>text</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Plz Enter Something"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label>tel</label>
                <input className="form-control" type="tel" />
              </div>
              <div className="flex flex-col space-y-2">
                <label>email</label>
                <input className="form-control" type="email" />
              </div>
              <div className="flex flex-col space-y-2">
                <label>password</label>
                <input className="form-control" type="password" />
              </div>
              <div className="flex flex-col space-y-2">
                <label>url</label>
                <input className="form-control" type="url" />
              </div>
              <div className="flex flex-col space-y-2">
                <label>number</label>
                <input className="form-control" type="number" />
              </div>
              <div className="flex flex-col space-y-2">
                <label>textarea</label>
                <textarea className="form-control" cols={3}></textarea>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col space-y-2">
                <label>search</label>
                <input className="form-control" type="search" />
              </div>
              <div className="flex flex-col space-y-2">
                <label>date</label>
                <input className="form-control" type="date" />
              </div>
              <div className="flex flex-col space-y-2">
                <label>datetime-local</label>
                <input className="form-control" type="datetime-local" />
              </div>
              <div className="flex flex-col space-y-2">
                <label>month</label>
                <input className="form-control" type="month" />
              </div>
              <div className="flex flex-col space-y-2">
                <label>week</label>
                <input className="form-control" type="week" />
              </div>
              <div className="flex flex-col space-y-2">
                <label>time</label>
                <input className="form-control" type="time" />
              </div>
              <div className="flex flex-col space-y-2">
                <label>color</label>
                <input className="form-control p-0" type="color" />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col space-y-2">
                <label>select</label>
                <select className="form-control">
                  <option value="">Plz Choose One</option>
                  <option value="1">Option1</option>
                  <option value="2">Option2</option>
                  <option value="3">Option3</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <label>select group</label>
                <select className="form-control">
                  <option value="">Plz Choose One</option>
                  <optgroup label="group1">
                    <option value="1">Option1</option>
                    <option value="2">Option2</option>
                    <option value="3">Option3</option>
                  </optgroup>
                  <optgroup label="group2">
                    <option value="4">Option4</option>
                    <option value="5">Option5</option>
                    <option value="6">Option6</option>
                  </optgroup>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <label>select required</label>
                <select className="form-control" required>
                  <option value="">Plz Choose One</option>
                  <option value="1">Option1</option>
                  <option value="2">Option2</option>
                  <option value="3">Option3</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <label>select group required</label>
                <select className="form-control" required>
                  <option value="">Plz Choose One</option>
                  <optgroup label="group1">
                    <option value="1">Option1</option>
                    <option value="2">Option2</option>
                    <option value="3">Option3</option>
                  </optgroup>
                  <optgroup label="group2">
                    <option value="4">Option4</option>
                    <option value="5">Option5</option>
                    <option value="6">Option6</option>
                  </optgroup>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <label>select multi</label>
                <select multiple className="form-control" required>
                  <option value="">Plz Choose One</option>
                  <option value="1">Option1</option>
                  <option value="2">Option2</option>
                  <option value="3">Option3</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <label>file</label>
                <input className="form-control" type="file" />
              </div>
              <div className="flex flex-col space-y-2">
                <label>file multi</label>
                <input className="form-control" type="file" multiple />
              </div>
            </div>
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>

      <div className="form-group space-x-2">
        <label>text</label>
        <input className="form-control" type="text" />
      </div>

      {/* <div class="backdrop flex-center">
    <div class="loader"></div>
  </div> */}

      <div className="loader"></div>

      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Service
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Team
          </a>
        </li>
      </ul>

      <ul className="pagination">
        <li className="page-item prev disabled">
          <a className="page-link chevron-icon left"></a>
        </li>
        <li className="page-item active">
          <a href="#" className="page-link">
            1
          </a>
        </li>
        <li className="page-item">
          <a href="#" className="page-link">
            2
          </a>
        </li>
        <li className="page-item">
          <a href="#" className="page-link">
            3
          </a>
        </li>
        <li className="page-item">
          <a href="#" className="page-link">
            4
          </a>
        </li>
        <li className="page-item">
          <a href="#" className="page-link">
            5
          </a>
        </li>
        <li className="page-item next">
          <a className="page-link chevron-icon right"></a>
        </li>
      </ul>

      <progress className="progress-bar" value="50" max="100"></progress>

      <form>
        <div className="form-check">
          <input
            type="radio"
            name="gender"
            className="form-check-input bounce"
            id="male"
          />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="gender"
            className="form-check-input bounce"
            id="female"
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="gender"
            className="form-check-input bounce"
            id="disabled"
            disabled
          />
          <label className="form-check-label" htmlFor="disabled">
            Disabled
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="gender"
            className="form-check-input bounce"
            id="disabled-checked"
            disabled
            checked
          />
          <label className="form-check-label" htmlFor="disabled-checked">
            Default
          </label>
        </div>
      </form>

      <input
        type="range"
        className="form-control-range"
        name="range"
        id="range"
        max="100"
      />

      <form
        className="form-check-inline leading-none"
        onInput={() =>
          (document.querySelector('#rate').value = parseInt(
            Array.from(
              document.querySelectorAll(`input[name='rating']`),
            ).filter((e) => e.checked)[0].value,
          ))
        }
      >
        <div className="rate">
          <input type="radio" name="rating" id="5" value="5" />
          <label htmlFor="5"></label>
          <input type="radio" name="rating" id="4" value="4" />
          <label htmlFor="4"></label>
          <input type="radio" name="rating" id="3" value="3" />
          <label htmlFor="3"></label>
          <input type="radio" name="rating" id="2" value="2" />
          <label htmlFor="2"></label>
          <input type="radio" name="rating" id="1" value="1" />
          <label htmlFor="1"></label>
        </div>
        <output id="rate" name="rate"></output>
      </form>

      <table className="table w-full">
        <thead>
          <tr>
            <th>User</th>
            <th>Role</th>
            <th>Permissions</th>
            <th>Active?</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>alphardex</td>
            <td>Administrator</td>
            <td className="space-x-2">
              <span className="tag tag-primary">Read</span>
              <span className="tag tag-success">Write</span>
              <span className="tag tag-danger">Execute</span>
            </td>
            <td>
              <div className="form-check">
                <input type="checkbox" className="form-switch" />
              </div>
            </td>
            <td>
              <button className="btn btn-primary edit">Edit</button>
            </td>
          </tr>
          <tr>
            <td>Aqua</td>
            <td>Modifier</td>
            <td className="space-x-2">
              <span className="tag tag-primary">Read</span>
              <span className="tag tag-success">Write</span>
            </td>
            <td>
              <div className="form-check">
                <input type="checkbox" className="form-switch" />
              </div>
            </td>
            <td>
              <button className="btn btn-primary edit">Edit</button>
            </td>
          </tr>
          <tr>
            <td>Megumin</td>
            <td>User</td>
            <td className="space-x-2">
              <span className="tag tag-primary">Read</span>
            </td>
            <td>
              <div className="form-check">
                <input type="checkbox" className="form-switch" />
              </div>
            </td>
            <td>
              <button className="btn btn-primary edit">Edit</button>
            </td>
          </tr>
          <tr>
            <td>Darkness</td>
            <td>Guest</td>
            <td>
              <span className="tag">None</span>
            </td>
            <td>
              <div className="form-check">
                <input type="checkbox" className="form-switch" />
              </div>
            </td>
            <td>
              <button className="btn btn-primary edit">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="search-bar">
        <div className="input-group">
          <button className="btn">
            <i className="search-icon scale-75"></i>
          </button>
          <input
            type="search"
            className="form-control"
            name="search"
            placeholder="Search"
          />
        </div>
      </div>

      <ul className="step">
        <li className="step-item done">
          <div className="step-item__node"></div>
          <div className="step-item__content">
            <div className="step-item__title">Step 1</div>
            <div className="step-item__desc">Sint in minim ad mollit duis</div>
          </div>
        </li>
        <li className="step-item active">
          <div className="step-item__node"></div>
          <div className="step-item__content">
            <div className="step-item__title">Step 2</div>
            <div className="step-item__desc">Sint in minim ad mollit duis</div>
          </div>
        </li>
        <li className="step-item">
          <div className="step-item__node"></div>
          <div className="step-item__content">
            <div className="step-item__title">Step 3</div>
            <div className="step-item__desc">Sint in minim ad mollit duis</div>
          </div>
        </li>
      </ul>

      <form>
        <div className="form-check">
          <input
            type="checkbox"
            name="hobby"
            className="form-switch"
            id="check-anime"
          />
          <label className="form-check-label" htmlFor="check-anime">
            Easy
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            name="hobby"
            className="form-switch"
            id="check-manga"
          />
          <label className="form-check-label" htmlFor="check-manga">
            Normal
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            name="hobby"
            className="form-switch"
            id="check-disabled"
            disabled
          />
          <label className="form-check-label" htmlFor="check-disabled">
            Disabled
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            name="hobby"
            className="form-switch"
            id="check-disabled-checked"
            disabled
            checked
          />
          <label className="form-check-label" htmlFor="check-disabled-checked">
            Default
          </label>
        </div>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Occupation</th>
            <th>Magic</th>
            <th>Intelligence</th>
            <th>Luck</th>
            <th>Endurance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Aqua</td>
            <td>Goddess</td>
            <td>A</td>
            <td>E</td>
            <td>E</td>
            <td>B</td>
          </tr>
          <tr>
            <td>Megumin</td>
            <td>Mage</td>
            <td>S</td>
            <td>A</td>
            <td>B</td>
            <td>C</td>
          </tr>
          <tr>
            <td>Darkness</td>
            <td>Knight</td>
            <td>E</td>
            <td>B</td>
            <td>B</td>
            <td>S</td>
          </tr>
          <tr>
            <td>Kazuma Satou</td>
            <td>Leader</td>
            <td>B</td>
            <td>A</td>
            <td>S</td>
            <td>B</td>
          </tr>
        </tbody>
      </table>

      <div className="tags">
        <span className="tag">Default</span>
        <span className="tag tag-primary">Primary</span>
        <span className="tag tag-secondary">Secondary</span>
        <span className="tag tag-info">Info</span>
        <span className="tag tag-success">Success</span>
        <span className="tag tag-warning">Warning</span>
        <span className="tag tag-danger">Danger</span>
        <span className="tag tag-primary">
          Closable<a className="close-icon"></a>
        </span>
      </div>

      <ul className="timeline">
        <li className="timeline-line"></li>
        <li className="timeline-item">
          <div className="timeline-item__timestamp">
            <div className="dot"></div>
            <time>08:30</time>
            <div>Check-in</div>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-item__timestamp">
            <div className="dot"></div>
            <time>09:30</time>
            <div>
              <a
                target="_blank"
                href="https://www.yuque.com/cssconf/yog9rr/hmzpxe"
              >
                New Era CSS Layouts
              </a>
            </div>
          </div>
          <div className="timeline-item__content">
            CSS layouts have often been a headache for front-end developers.
            However, in recent years, browsers have evolved to support features
            like Flexbox, Grid Layout, and Box Alignment. These CSS standards
            are specifically designed to handle web layouts. We will dive into
            the characteristics of these new properties, modern layout
            techniques, examples, and best practices. We hope the audience will
            be inspired to use these new CSS properties to create designs that
            better align with the nature of browsers.
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-item__timestamp">
            <div className="dot"></div>
            <time>10:20</time>
            <div>
              <a
                target="_blank"
                href="https://www.yuque.com/cssconf/yog9rr/no7l1o"
              >
                Analyzing the New css-tricks, For Your Use
              </a>
            </div>
          </div>
          <div className="timeline-item__content">
            The new version of css-tricks.com has received a lot of praise on
            social media. Today, we will discuss some of the new features used
            in this redesign, how these features enhance the user experience,
            and how we can apply them to our own projects.
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-item__timestamp">
            <div className="dot"></div>
            <time>12:00</time>
            <div>Lunch</div>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-item__timestamp">
            <div className="dot"></div>
            <time>13:00</time>
            <div>
              <a
                target="_blank"
                href="https://www.yuque.com/cssconf/yog9rr/rpl1tf"
              >
                CSS Creativity and Visual Presentation
              </a>
            </div>
          </div>
          <div className="timeline-item__content">
            The fun of CSS lies in how the final presentation is closely related
            to your thinking style and creativity. This session will showcase
            how creativity can make CSS visual presentations more interesting
            through some exciting examples.
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-item__timestamp">
            <div className="dot"></div>
            <time>14:00</time>
            <div>
              <a
                target="_blank"
                href="https://www.yuque.com/cssconf/yog9rr/hyku3f"
              >
                CSS Generated Art
              </a>
            </div>
          </div>
          <div className="timeline-item__content">
            Although you can't directly draw a curve or dynamically generate
            many elements in CSS, you can still create fascinating graphics and
            art by leveraging CSS properties, combining some basic methods, and
            using your imagination. This talk will share the processes and
            techniques used to achieve this.
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-item__timestamp">
            <div className="dot"></div>
            <time>14:50</time>
            <div>
              <a
                target="_blank"
                href="https://www.yuque.com/cssconf/yog9rr/vg70mz"
              >
                Five CSS Features You Didn't Know
              </a>
            </div>
          </div>
          <div className="timeline-item__content">
            This session will share five lesser-known CSS features that the
            speaker discovered while studying the standards recently. Through
            related code, examples, and stories, we will help you explore more
            fun and practical uses of CSS.
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-item__timestamp">
            <div className="dot"></div>
            <time>15:40</time>
            <div>Coffee Time</div>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-item__timestamp">
            <div className="dot"></div>
            <time>16:20</time>
            <div>
              <a
                target="_blank"
                href="https://www.yuque.com/cssconf/yog9rr/nays55"
              >
                10 Things I Wish CSS Authors Knew About Animations
              </a>
            </div>
          </div>
          <div className="timeline-item__content">
            Animations can make your website or app feel more natural, fun, and
            elegant. However, animations themselves can also be challenging,
            slow, and unpleasant. Let’s explore some common misconceptions,
            lesser-known features, and upcoming technologies related to
            animations that browser vendors wish authors knew about.
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-item__timestamp">
            <div className="dot"></div>
            <time>17:30</time>
            <div>
              <a
                target="_blank"
                href="https://www.yuque.com/cssconf/yog9rr/hbix70"
              >
                CSS TIME
              </a>
            </div>
          </div>
          <div className="timeline-item__content">
            The concept of time is like the soul of animations, and it also
            exists within web CSS. Duration? Delay? What are the time concepts
            in CSS, and what roles do they play? We will analyze CSS TIME step
            by step based on demo examples, and perhaps you will gain a new
            understanding of it.
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-item__timestamp">
            <div className="dot"></div>
            <time>18:30</time>
            <div>End</div>
          </div>
        </li>
      </ul>

      <div className={style.tooltips}>
        <div className={style.top}>
          <button
            className="btn btn-primary"
            data-tooltip="top-left tooltip"
            data-placement="top-left"
          >
            Hover
          </button>
          <button
            className="btn btn-primary"
            data-tooltip="top tooltip"
            data-placement="top"
          >
            Hover
          </button>
          <button
            className="btn btn-primary"
            data-tooltip="top-right tooltip"
            data-placement="top-right"
          >
            Hover
          </button>
        </div>
        <div className={style.right}>
          <button
            className="btn btn-primary"
            data-tooltip="right-top tooltip"
            data-placement="right-top"
          >
            Hover
          </button>
          <button
            className="btn btn-primary"
            data-tooltip="right tooltip"
            data-placement="right"
          >
            Hover
          </button>
          <button
            className="btn btn-primary"
            data-tooltip="right-bottom tooltip"
            data-placement="right-bottom"
          >
            Hover
          </button>
        </div>
        <div className={style.bottom}>
          <button
            className="btn btn-primary"
            data-tooltip="bottom-left tooltip"
            data-placement="bottom-left"
          >
            Hover
          </button>
          <button
            className="btn btn-primary"
            data-tooltip="bottom tooltip"
            data-placement="bottom"
          >
            Hover
          </button>
          <button
            className="btn btn-primary"
            data-tooltip="bottom-right tooltip"
            data-placement="bottom-right"
          >
            Hover
          </button>
        </div>
        <div className={style.left}>
          <button
            className="btn btn-primary"
            data-tooltip="left-top tooltip"
            data-placement="left-top"
          >
            Hover
          </button>
          <button
            className="btn btn-primary"
            data-tooltip="left tooltip"
            data-placement="left"
          >
            Hover
          </button>
          <button
            className="btn btn-primary"
            data-tooltip="left-bottom tooltip"
            data-placement="left-bottom"
          >
            Hover
          </button>
        </div>
      </div>
    </div>
  );
}

export default UiPage;

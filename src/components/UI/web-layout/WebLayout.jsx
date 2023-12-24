import './WebLayout.css';

const WebLayout = (props) => {
  let title = props.url;
  let firstDot = null;
  let secondDot = null;

  for (let i = 0; i < title.length; i++) {
    if (title[i] === '.' && !!firstDot) {
      secondDot = i;
      break;
    }
    if (title[i] === '.' && !firstDot) {
      firstDot = i;
    }
  }

  if (!secondDot) {
    title = title.slice(8, firstDot);
  } else {
    title = title.slice(firstDot + 1, secondDot);
  }

  title = title[0].toUpperCase() + title.slice(1);

  return (
    <section className='website-details'>
      <div className='website-details__basic'>
        <img src={props.image} className='website__logo' loading='lazy' />
        <h6 className='website__name'>{title}</h6>
        <a href={props.url} className='website__link--home'>
          {props.url}
        </a>
        <span className='material-icons'>more_vert</span>
      </div>
      <a href={props.url} className='website__link--page'>
        {props.title}
      </a>
      <p className='website__text-content'>{props.body}</p>
      <div className='separator'></div>
    </section>
  );
};

export default WebLayout;

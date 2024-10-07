
const adress  = 'http://zrozumiecreact.pl';

export function Link({text=adress, shouldOpenNewTab}) {
    const target = shouldOpenNewTab ? '_blank' : '';
    const rel = shouldOpenNewTab ? 'noopener noreferrer' : '';
    
    return (
      <a href={adress}
      rel={rel}
      target={target}>
        {text}
    </a>
    )
  }
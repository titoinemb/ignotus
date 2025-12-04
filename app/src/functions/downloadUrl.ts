const open = (url: string) => {
  window.open(url, '_blank');
  return window.location.href;
};

export const donwloadUrl = (who: number) => {
  if(who === 1) {
    return open("https://duck.ai");
  } else if(who === 2) {
    return open("1");
  } else if(who === 3) {
    return open("1");  
  } else if(who === 4) {
    return open("1");
  };
};
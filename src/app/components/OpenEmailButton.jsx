

const OpenEmailButton = () => {
    const emailAddress = 'yash.ecs@gmail.com';
  
    const handleOpenEmail = () => {
      const subject = encodeURIComponent("Let's Connect!!");
      const body = encodeURIComponent("Hey Yash i'am interested in knowing more about you");
  
      window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    };
    handleOpenEmail()
}
export default OpenEmailButton;  
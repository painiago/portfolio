import React from 'react';

class ScrollColorChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: 'black' };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const posicaoScroll = window.scrollY;
    if (posicaoScroll > 620) {
      this.setState({ color: 'black' });
    } else {
      this.setState({ color: 'white' });
    }
  };

  render() {
    const { color } = this.state;
    const { children } = this.props;
    const style = { color };
    return (
      <div style={{ height: '2000px' }}>
        {React.cloneElement(children, { style })}
      </div>
    );
  }
}

export default ScrollColorChange;

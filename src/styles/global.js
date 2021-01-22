export default theme => ({
    '@global': {
        '*::before': {
            boxSizing: 'border-box'
        },
        '*::after': {
            boxSizing: 'border-box'
        },
        html: {
            '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)'
        },
        body: {
            margin: 0,
            color: '#fff',
            fontFamily: `'OpenSans', sans-serif`,
            fontSize: '1rem',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center bottom',
            backgroundSize: 'cover',
            backgroundImage: 'url("../images/splash.jpg")',
            overflow: 'hidden'
        },
        '#errorBoundryRoot': {
            flex: '1 1 auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        '#errorBoundryMessage': {
            marginTop: '10px',
            padding: '10px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '3px',
            backgroundColor: 'rgba(0,0,0,0.7)'
        }
    }
});

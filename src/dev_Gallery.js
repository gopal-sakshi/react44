function Profile(props) {
    return (
        <>
            <div style = { props.theme11 }>
                { props.name11 }
            </div>
            
            <div style = {{ color: 'blue' }}>
                { props.name11 }
            </div>

            {/* Relative imports outside of src/ are not supported */}
            {/* we need to use scientists folder within src folder */}
            <img 
                className="avatar" 
                src= { require(`./resources25_scientists/${props.name11}.webp`) }  
                alt="scientist_img"
                width={ props.theme11?.width || '150px' } height = { props.theme11?.height || '150px' }
            />
            <br></br>
        </>
    );
}
  
export default function Gallery() {
    const madam23 = { name11: 'madam_curie', theme11: { color: 'brown', fontSize:'20px' } };
    return (
        
        <section>
            <h1>Amazing scientists</h1>
                
                { /* passing individual props */ }
                <Profile name11= "newton" theme11= {{ color: 'red', textDecoration: 'underline' }} />
                <Profile {...madam23} />
                <Profile name11 = "tesla" theme11= {{ 
                    width: '300px', height: '300px', 
                    border: '1px solid red', margin: 'auto', textAlign: 'center'  }} />
                <Profile name11 = "darwin" />
        </section>
    );
  }
  
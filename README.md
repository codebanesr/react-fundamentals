    How it works
-------------------------
index.js and index.html are very closely related
we have a div element called <root> where we are rendering our router

<Router path="/" component={App}>
    //all child components here which makes App as the layout component i.e whatever
    is put in App component will appear on all pages
    <IndexRoute component={HomeComponent} />   //no path required here since it                                                   //matches nothing

    <Route="about" component={AboutComponent}/>  //dont do "/about" that matches                                                    //Router path already above
    
<Router>



    so what are we rendering on root div of index.html
------------------------------------------------------------
Two things - 1st is app component and the second one is any other path that matches
if nothing appears after "/" then IndexRoute will display HomeComponent

if about matches then app component + this.props.child will display AboutComponent and so on


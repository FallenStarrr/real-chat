import React from 'react'

const Loader = () => {
  return (
    <Container>
          <Grid container
                style={{height: window.innerHeight - 50}}
                alignItems={"center"}
                justify={"center"}
          >
            <Grid 
              container
              alignItems={'center'}
              direction={'column'}
              >
            <div class="lds-hourglass"></div>
            </Grid>

          </Grid>
      </Container>
  )
}

export default Loader
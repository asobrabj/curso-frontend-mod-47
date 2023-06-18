import Header from './components/Header';
import CalculatorIMC from './components/IMC';
import Form from './components/Form/Form'
import Login from './components/Login/LoginControl'
import { Heading1, Loader, Titulo } from './components/Styles/styles'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import React from 'react';
import { Box, Container, ThemeProvider }  from '@mui/system' 
import { themeOne, themeTwo } from './theme'

function App() {
  return (
    <React.Fragment>

<Container 
        sx={{
          display: 'flex',
          marginTop: '2rem',
          marginBottom:'2rem',
        }}
        maxWidth='sm'>

        
        <Titulo>Venda de Carros em promoção</Titulo>        

         
      </Container>

<Container 
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '15px',
          marginTop: '2rem'
        }}
        maxWidth='sm'>

        <ThemeProvider theme={themeOne} >
          <Box sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 3,
            border: 1,
            p: 2,
            minWidth: 250
          }}>
          
            <Box sx={{color: 'text.secondary', fontSize: 28}}>Volkswagen Gol G8</Box>

            <Box sx={{color: 'text.primary', fontSize:32, fontWeight:'bold'}}>R$ 78.869,00</Box>
            
            <Box sx={{color: 'success.dark', display: 'inline', fontWeight: 'bold', mx: 0.5,
                fontSize: 14,}}>20% desconto a vista</Box>

            <Box sx={{ color: 'text.secondary',  fontSize: 14, paddingLeft:2 }}> / Só esta semana / </Box>

          </Box>
        </ThemeProvider>

        <ThemeProvider theme={themeTwo}>
        <Box sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 3,
            border: 1,

            p: 2,
            minWidth: 250
          }}>
          
            <Box sx={{color: 'text.secondary', fontSize: 28}}>Renault Kwid</Box>

            <Box sx={{color: 'text.primary', fontSize:32, fontWeight:'bold'}}>R$ 68.130,00</Box>
            
            <Box sx={{color: 'success.dark', display: 'inline', fontWeight: 'bold', mx: 0.5,
                fontSize: 14,}}>15% desconto a vista</Box>

            <Box sx={{ color: 'text.secondary',  fontSize: 14, paddingLeft:2 }}> / Só esta semana / </Box>

          </Box>
        </ThemeProvider> 
      </Container>

    <Container 
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '10px',
          marginTop: '2rem'
        }}
        maxWidth='sm'>

<ThemeProvider theme={themeTwo}>
        <Box sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 3,
            border: 1,

            p: 2,
            minWidth: 250
          }}>
          
            <Box sx={{color: 'text.secondary', fontSize: 28}}>Hyundai HB20</Box>

            <Box sx={{color: 'text.primary', fontSize:32, fontWeight:'bold'}}>R$ 82.990,00</Box>
            
            <Box sx={{color: 'success.dark', display: 'inline', fontWeight: 'bold', mx: 0.5,
                fontSize: 14,}}>15% desconto a vista</Box>

            <Box sx={{ color: 'text.secondary',  fontSize: 14, paddingLeft:2 }}> / Só esta semana / </Box>

          </Box>
        </ThemeProvider> 

        <ThemeProvider theme={themeOne}>
        <Box sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 3,
            border: 1,

            p: 2,
            minWidth: 250
          }}>
          
            <Box sx={{color: 'text.secondary', fontSize: 28}}>Renault Sandero</Box>

            <Box sx={{color: 'text.primary', fontSize:32, fontWeight:'bold'}}>R$ 82.343,00</Box>
            
            <Box sx={{color: 'success.dark', display: 'inline', fontWeight: 'bold', mx: 0.5,
                fontSize: 14,}}>15% desconto a vista</Box>

            <Box sx={{ color: 'text.secondary',  fontSize: 14, paddingLeft:2 }}> / Só esta semana / </Box>

          </Box>
        </ThemeProvider>  
      </Container>

      <Container 
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '15px',
          marginTop: '2rem'
        }}
        maxWidth='sm'>

        <ThemeProvider theme={themeOne} >
          <Box sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 3,
            border: 1,
            p: 2,
            minWidth: 250
          }}>
          
            <Box sx={{color: 'text.secondary', fontSize: 28}}>Fiat Cronos</Box>

            <Box sx={{color: 'text.primary', fontSize:32, fontWeight:'bold'}}>R$ 83.114,00</Box>
            
            <Box sx={{color: 'success.dark', display: 'inline', fontWeight: 'bold', mx: 0.5,
                fontSize: 14,}}>25% desconto a vista</Box>

            <Box sx={{ color: 'text.secondary',  fontSize: 14, paddingLeft:2 }}> / Só esta semana / </Box>

          </Box>
        </ThemeProvider>

        <ThemeProvider theme={themeTwo}>
        <Box sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 3,
            border: 1,

            p: 2,
            minWidth: 250
          }}>
          
            <Box sx={{color: 'text.secondary', fontSize: 28}}>Chevrolet Onix</Box>

            <Box sx={{color: 'text.primary', fontSize:32, fontWeight:'bold'}}>R$ 83.617,00</Box>
            
            <Box sx={{color: 'success.dark', display: 'inline', fontWeight: 'bold', mx: 0.5,
                fontSize: 14,}}>10% desconto a vista</Box>

            <Box sx={{ color: 'text.secondary',  fontSize: 14, paddingLeft:2 }}> / Só esta semana / </Box>

          </Box>
        </ThemeProvider> 
      </Container>
      
      
      {/* <Header title="Título do APP" />
      <CalculatorIMC /> */}
      
      {/* <Form title="props" />
      
      <Heading1>
        Styled Component
        <span>Subtitle</span>
      </Heading1>
      
      <Loader />
      
      <Login name={'Marcelo'} />
      
      <Stack spacing={2} direction="row">
        <Button variant="text">Call to Action Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack> */}
    </React.Fragment>
  );
}

export default App;

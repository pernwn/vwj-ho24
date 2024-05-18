import { Box, Button, TextField } from "@mui/material";


export default function Form() {



  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 2, width: "25ch" },
      }}
      validate
      autoComplete="on"
    >
      <div className="flex flex-col w-full items-center">
        <TextField
          label="Navn"
          id="outlined-size-normal"
          defaultValue="Jens Jensen"
          className="outline-white"
          
        />
        <TextField
          label="Kontaktoplysninger"
          id="outlined-size-normal"
          defaultValue="eksempel@email.dk"
          className="textfield"
        />
        <TextField
          label="Beskriv hvordan vi kan hjælpe dig"
          id="outlined-size-normal"
          defaultValue="Jeg ønsker at indlede en dialog med jeres team for at diskutere vores specifikke behov og krav til IT-sikkerhed. Vores virksomhed opererer i en branche, hvor..."
          multiline
          className="textfield"
        />
        <Button className="bg-cmaccent w-full p-2 mt-4 transition-colors ease-in hover:bg-[#ED532D]">
          <p className="text-cmprimary">start dialogen</p>
        </Button>
      </div>
    </Box>
  );
}

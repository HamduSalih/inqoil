# inqoil

A simple reactjs file upload library that is used to upload files to Supabase Storage, for now. This library was built on top of react-drag-drop-files(https://npmjs.org/package/react-drag-drop-files). It is a light and simple reactjs drag and drop files library to use with very flexible options to change, so you put whatever the design you want for your drop-area. Users can drag and drop or even select the file anywhere in the window.

## Prerequisites
- Before installing, get your key by (registering [here](https://inqoil.vercel.com/))
- Make sure you have a Supabase account. You can get (one [here](https://supabase.com/))
- Create a project and get your project url and anon key from your Supabase account
- Create at least one storage bucket.

## Installation
Install it from npm (using [NPM](http://webpack.github.io/)).

```bash
npm i --save inqoil
```

or:

```bash
yarn add inqoil
```

## Usage

Using react hooks just as simple as:

```jsx static
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

export default function Home() {
  const handlesChange = (response) => {
    console.log(response);
  };
  return (
    <div>
      <main className={styles.main}>
        <Inqoil
          supabaseUrl='df4gfd65g4df+6g4rdh4h4d6df4g8dg4df8gfg4'
          supabaseAnonKey='sgfdfgsg65sfg6dfsg56sd5g4s6d5g4sd6g45d65g4sd6g54sd65f4'
          handlesChange={handlesChange}
          bucket="inqoil-bucket"
          folder="inqoil-folder"
          fileName='inqoil'
          key='2344e5ytrhxfvsfet45y56htrfg'
        />
      </main>
    </div>
  );
}
```


| Option                | Type                        | Description                                                                                                         | value example                                             |
| --------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| supabaseUrl                  | string                      | supabase project url                                                                                   | `"https://fdfsgfgjnnthdgshgg.supabase.co"`
| supabaseAnonKey                  | string                      | supabase anon public key                                                                                   | `"ewsldkvnkmwscldskmomkdmslmdisoicdsocmdocdcd.ddcsdoicjviofjviodcevnreivndiojdojsaiadivnasindinadsindaiodsnoadd.dcscsacbisciscuscsduicnsducdsucbeubewuybusdsueusdbdudscnuenusid.ddcwdubeuybwuyebvyuwbceuuwbuvuibduivbevubucyebyueubriauburvbaivybuerhuyewbuy"`
| handlesChange                  | function                      | a function to receive response from inqoil                                                                                   |const handlesChange = (response) => {console.log(response);};
| bucket                  | string                      | supabase storage bucket name                                                                                   | `"test-bucket"`
| folder                  | string                      | supabase storage folder name                                                                                  | `"test"`
| fileName                  | string                      | name to be given to the file being uploaded                                                                                   | `"hamdev"`
| label                 | string                      | the label (text) for your form (if exist) inside the uploading box - first word underlined                          | `"Upload or drop a file right here"`                      |
| disabled              | boolean                     | this for disabled the input                                                                                         | `true OR false`                                           |
| hoverTitle            | string                      | text appears(hover) when trying to drop a file                                                                      | `"Drop here"` 
| types                 | Array<strings>              | array of strings with extensions to check and go throw                                                              | `['png', 'jpeg', ...]`                                    |
| onTypeError           | function                    | function that will be called only of error occurred related to type                                                 | `(err) => console.log(err)`                               |
| children              | JSX Element, any            | if you want to replace the current design inside the box of drop zone. (**it will remove the default exist style**) | `<div><p>this is inside drop area</p></div>` or just text |
| maxSize               | number                      | the maximum size of the file (number in mb)                                                                         | 2                                                         |
| onSizeError           | function                    | function that will be called only if error related to min or max size occurred                                      | `(file) => console.log(file)`                             |

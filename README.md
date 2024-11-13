
# pj-global-loader

Here is the one-stop solution to add a global loader into your project to seamlessly run your project with all Axios requests.


## Table of Contents

- [Installation](#installation)
- [Demo](#demo)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Example](#example)
- [Author](#authors)

## Installation

Install pj-global-loader with npm

```bash
  npm install pj-global-loader
```
    
## Demo

- [Demo](https://vitejsviteedctp1-vrsc--5173--f565b097.local.webcontainer.io/)

## Usage

- To add pj-global-loader into your project, you can import as it follows:

```bash
import { Loader } from 'pj-global-loader';
```

## API Reference

- Use pj-global-loader as below:

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `axios` | `axios` | **Required**. must pass axios as props |

#### Custom

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `color`      | `string` | - Pass `color` props to change the color of your loader. The `color` value must be a string. |
| `size`      | `number` | - Pass `size` props to give custom size as you want. The `size` value must be a number. |

## Example

```javascript
import { Loader } from 'pj-global-loader';
import axios from 'axios';

function App() {
  return <Loader axios={axios} color="green" size={40} />
}

export default App;
```

## Authors

- Prince Javiya


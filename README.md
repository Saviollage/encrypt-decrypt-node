# Securing Files using NodeJs

The purpose of this project is to override the **readFile()** and **writeFile()** methods from within the module. So, whenever any method uses **writeFile()** to save a file, we will intercept this function, encrypt the data and let the stream continue saving the file.

To get the readable content from these files, we will intercept the **readFile()** call. After it gets the encrypted content from the file, we will call the function to do the reverse process, decrypting and returning the readable data to the caller.

## 📃 Example

_Content_

```js
const filetarget = "super-secret-file.txt.enc";
const data = "Agora: 2021-04-09T19:30:35.967Z";
await promises.writeFile(filetarget, text);
```

_super-secret-file.txt.enc_

```txt
dOM04WsOfu8enHGAdkmF6KYc+TGZo2I3HqqTDHvHf8s=
```

## 🚀 Instalation

```bash
  # Clone the project:
  $ git clone https://github.com/saviollage/encrypt-decrypt-node

    # Enter Directory:
  $ cd encrypt-decrypt-node

  # Install the dependencies:
  $ npm ci

  # Running app:
  $ npm start
```

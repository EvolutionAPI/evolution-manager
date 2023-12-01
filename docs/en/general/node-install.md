[title]: \\ "Installing Node Using NVM"

# Installing Node.js with NVM

This guide provides step-by-step instructions on how to install Node.js on Linux using NVM (Node Version Manager).

## Prerequisites

- Access to a terminal in Linux.
- Permissions to execute installation commands (usually as a root user or with `sudo`).

## Step 1: Install NVM

NVM is a tool that allows you to manage multiple versions of Node.js. To install it, execute the following command in your terminal:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

*Note: You can check the latest version of NVM on their [GitHub page](https://github.com/nvm-sh/nvm).*

After installation, close and reopen the terminal, and then run the following command to check if NVM was installed correctly:

```bash
nvm --version
```

## Step 2: Install Node.js

With NVM installed, you can now install Node.js. To install the latest version, use the command:

```bash
nvm install node
```

To install a specific version of Node.js, you can do:

```bash
nvm install 18
```

After installation, verify the Node.js version with:

```bash
node -v
```

## Step 3: Use a Specific Version of Node.js

You can switch between installed versions of Node.js with the `nvm use` command:

```bash
nvm use 18 # replace 18 with the version you want to use
```

## Conclusion

You now have NVM installed on your Linux system, allowing you to install and manage multiple versions of Node.js. This is particularly useful for developers working on multiple projects that may require different versions of Node.js.

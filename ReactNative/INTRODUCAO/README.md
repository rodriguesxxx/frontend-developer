# React Native

## Introdução

## Primeiro projeto

-   ### Instalando JDK17(fedora)

```bash
sudo dnf install java-17-openjdk java-17-openjdk-devel
```

Caso tenha mais de uma versão instalada, alterne para 17.

```bash
sudo alternatives --config java
```

-   ### Criando projeto(sem framework)

```bash
npx @react-native-community/cli@latest init PrimeiroProjeto
```

Adicionando typescript

```bash
npm install -D @tsconfig/react-native @types/jest @types/react @types/react-test-renderer typescript
```

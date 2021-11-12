import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useContext } from "react";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, usersCollection } from "../firebaseConfig";
import { UserData } from "../context/Context";
import { addDoc } from "firebase/firestore";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const SignUp: NextPage = () => {
  const router = useRouter();

  const { setUserDetails, setItemToLocalStorage } = useContext(UserData);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConFirmPass] = useState("");

  const createDbUser = async (uid) => {
    const data = { uid, productList: [] };
    try {
      const res = await addDoc(usersCollection, data);
      console.log("createDbUser", res);
    } catch (err) {
      alert("Unable to createDbUser", err.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (confirmPass !== password) {
      return alert("Password does not match");
    }

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      // setEmail("");
      // setPassword("");
      // setConFirmPass("");
      // if (user) {
      //   const {
      //     user: { email, uid, displayName },
      //   } = user;
      //   const personDetail = { uid, displayName, email };
      //   console.log("person details", personDetail);
      //   setUserDetails(personDetail);
      //   setItemToLocalStorage(personDetail);
      //   router.push("/");
      // }
      onAuthStateChanged(auth, (user) => {
        console.log("Auth state changed");

        if (user) {
          const { email, uid, displayName } = user;
          const personDetail = { uid, displayName, email };
          createDbUser(uid);
          console.log("person details", personDetail);
          setUserDetails(personDetail);
          router.push("/");
        } else {
          router.push("/signin");
        }
      });
    } catch (err) {
      alert(`Error occured while creating user : ${err.message}`);
    }
  };

  return (
    <div>
      <Head>
        <title>Product Expiry List | Sign Up</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className="p-2">
        <Form onSubmit={handleSignUp}>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required={true}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            className="mb-3"
          >
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required={true}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Confirm Password"
            className="mb-3"
          >
            <Form.Control
              type="password"
              placeholder="Confirm password"
              onChange={(e) => setConFirmPass(e.target.value)}
              value={confirmPass}
              required={true}
            />
          </FloatingLabel>
          <Button variant="primary" type="submit">
            Sign UP
          </Button>
        </Form>
        <p className="text-secondary">
          Already have an account? <Link href="/signin">Sign In</Link>
        </p>
      </Container>
    </div>
  );
};

export default SignUp;

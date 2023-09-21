import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import "./main.css";
import { AiFillSetting } from "react-icons/ai";

import Toolbar from "../toolbar/Toolbar";
import Sidebar from "../sidebar/Sidebar";

function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <div className="main-container">
        <div className="inner-container-main">
          <div className="inner-container-main-toolbar">
            <Toolbar />
          </div>

          <div className="inner_container_main_body">
            <div className="inner-container-main-body-sider">
              <Sidebar />
            </div>

            <div className="inner-container-main-body-content">
              <div className="pdf-viewer"></div>
              <div className="setting">
                <AiFillSetting className="setting-icon" onClick={onOpen} />
              </div>
            </div>
          </div>
        </div>

        {/*----------------------Functional SideBar------------------*/}

        <div className="inner-functional-container">
          <div className="inner-functional-container-header">
            <Heading>SIGNING OPTION</Heading>
          </div>
        </div>

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>SIGN PDF</DrawerHeader>
            <DrawerFooter>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}

export default Main;

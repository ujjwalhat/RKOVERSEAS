import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import logo from "../assets/images/logo.jpg"
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function NNavbar() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const handleEmail = () => {
    window.location.href = `mailto:rkoverseas.online@gmail.com?subject=Inquiry about products &body=I am interested in the  from the antique collection.`;
  }

  const handlePhone = () => {
    window.location.href = `tel:8057548235`;
  }

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img src={logo} width={100}  className="h-14 object-cover mr-3 rounded-full w-14"/>
          <Link className="font-bold text-inherit " as={Link} to="/" color="foreground" href="#" >RK OVERSEAS</Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Catelogs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground" aria-current="page">
            Gallery
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={Link} to="/products" color="foreground" href="#">
            Products
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
        <Button onPress={onOpen} color="warning" variant="flat">Contact Us</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">RK Overseas Contact Us</ModalHeader>
              <ModalBody>
                <p> 
                  <h1 className="font-bold">ADDRESS</h1>
                RK OVERSEAS
                B-5,6 UPSIDC,
                Industrial Area,
                Firozabad, UP,
                INDIA - 283203
                </p>
                <p>
                <h1 className="font-bold">Email</h1>
                <div className="flex ">
                <p>rkoverseas.online@gmail.com</p> 
                <button className="text-2xl text-blue-500 ml-2" onClick={handleEmail}>
                            <MdEmail/>
                </button>
                </div>
                </p>
                <p>
                <h1 className="font-bold">Phone</h1>
                <div className="flex ">
                <p>+91 8057548235</p> 
                <button className="text-2xl text-green-500 ml-2" onClick={handlePhone}>
                            <IoCall/>
                </button>
                </div>
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={handleEmail}>
                  Email <MdEmail/>
                </Button>
                <Button color="success" onClick={handlePhone} className="text-white">
                  Call  <IoCall/>
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

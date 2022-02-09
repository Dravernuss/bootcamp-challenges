import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../utils/testUtils";
import { RegistrarCandidato } from "../RegistrarCandidato";
import { errors } from "../RegistrarCandidato";

describe("RegistrarCandidato", () => {
  it("should return an error if fields are empty", () => {
    // arrange
    render(<RegistrarCandidato />);
    const registrarBtn = screen.getByRole("button", {
      name: /registrar/i,
    });
    //act
    fireEvent.click(registrarBtn);

    //assert
    expect(screen.getByText(errors.propuestas)).toBeInTheDocument();
    expect(screen.getByText(errors.nombre)).toBeInTheDocument();
    expect(screen.getByText(errors.apellido)).toBeInTheDocument();
  });

  it("Should return and error if name is empty", () => {
    render(<RegistrarCandidato />);
    const apellidoInput = screen.getByRole("textbox", {
      name: /apellido/i,
    });

    userEvent.type(apellidoInput, "sosa");
    screen.debug(apellidoInput);
  });

  fit("Should return and error if name is empty even the other are not", () => {
    render(<RegistrarCandidato />);
    const apellidoInput = screen.getByRole("textbox", {
      name: /apellido/i,
    });
    const propuestasInput = screen.getByRole("textbox", {
      name: /propuestas/i,
    });
    const registrarBtn = screen.getByRole("button", {
      name: /registrar/i,
    });

    userEvent.type(apellidoInput, "sosa");
    userEvent.type(propuestasInput, "No más pobres en un pais rico");
    fireEvent.click(registrarBtn);
    expect(screen.getByText(errors.nombre)).toBeInTheDocument();
  });
});

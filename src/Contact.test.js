import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Contact from "./Contact";

describe("Contact Component", () => {
    test("renders contact info", () => {
        render(
            <Router>
                <Contact />
            </Router>
        );

        // Kiểm tra các thông tin liên hệ
        const contactInfo = screen.getByText("123 Camsite Avenue, Wilderness, CA 98765");
        expect(contactInfo).toBeInTheDocument();

        const emailInfo = screen.getByText("info@littelemon.com");
        expect(emailInfo).toBeInTheDocument();

        const phoneInfo = screen.getByText("0123 456 789");
        expect(phoneInfo).toBeInTheDocument();

        const workingHours = screen.getByText("Monday - Friday: 9:00 AM - 10:00 PM");
        expect(workingHours).toBeInTheDocument();
    });

    test("renders form fields", () => {
        render(
            <Router>
                <Contact />
            </Router>
        );

        // Kiểm tra sự hiện diện của các trường trong form
        const nameField = screen.getByLabelText(/Your Name/i);
        expect(nameField).toBeInTheDocument();

        const dateField = screen.getByLabelText(/Date/i);
        expect(dateField).toBeInTheDocument();

        const timeField = screen.getByLabelText(/Time/i);
        expect(timeField).toBeInTheDocument();

        const descriptionField = screen.getByLabelText(/Additional Information/i);
        expect(descriptionField).toBeInTheDocument();

        const paymentField = screen.getByLabelText(/Select Payment Method/i);
        expect(paymentField).toBeInTheDocument();
    });

    test("submit form and call signUp function with form data", () => {
        render(
            <Router>
                <Contact />
            </Router>
        );

        // Lấy các trường input từ form
        const nameField = screen.getByLabelText(/Your Name/i);
        const dateField = screen.getByLabelText(/Date/i);
        const timeField = screen.getByLabelText(/Time/i);
        const descriptionField = screen.getByLabelText(/Additional Information/i);
        const paymentField = screen.getByLabelText(/Select Payment Method/i);

        // Mô phỏng điền thông tin vào form
        fireEvent.change(nameField, { target: { value: "Tran Xuan Binh" } });
        fireEvent.change(dateField, { target: { value: "2025-01-25" } });
        fireEvent.change(timeField, { target: { value: "14:00" } });
        fireEvent.change(descriptionField, { target: { value: "This is a description" } });
        fireEvent.change(paymentField, { target: { value: "credit-card" } });

        // Mô phỏng nhấn nút submit
        const submitButton = screen.getByText(/Submit/i);
        fireEvent.click(submitButton);

        // Kiểm tra xem hàm signUp có được gọi với dữ liệu chính xác không
        // Chúng ta cần mock console.log trong hàm signUp để kiểm tra kết quả
        const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

        // Kiểm tra nếu giá trị của 'favColor' được log ra đúng
        fireEvent.submit(screen.getByRole("form"));
        expect(consoleSpy).toHaveBeenCalledWith("null"); // Kiểm tra giá trị favColor (null trong trường hợp này)

        // Dọn dẹp sau khi test
        consoleSpy.mockRestore();
    });
});

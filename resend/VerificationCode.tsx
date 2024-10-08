import * as React from "react";
import {
    Html,
    Head,
    Preview,
    Tailwind,
    Body,
    Container,
    Heading,
    Text,
    Section
} from "@react-email/components"

interface VerificationCodeEmailProps {
    username: string,
    verificationCode: string,
}

const VerificationCodeEmail: React.FC<Readonly<VerificationCodeEmailProps>> = ({
    username,
    verificationCode
}) => {
    return (
        <Html lang="en" dir="ltr" >
            <Head>
                <title>Verification Code</title>
            </Head>
            <Preview>Email Verification Code</Preview>
            <Tailwind>
                <Body className="p-5">
                    <Container>
                        <Section>
                            <Heading as="h2">Nexts App Email Verification</Heading>
                            <Text>Dear {username}</Text>
                            <Text>Your Verification Code is as follows</Text>
                            <Heading as="h3">{verificationCode}</Heading>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}

export default VerificationCodeEmail;
import React, {Component} from 'react';
import { Grommet, Box, Stack, Text, Avatar, Form, FormField, TextInput, CheckBox } from 'grommet'
import { FormEdit, Mail, Lock } from 'grommet-icons'


class Authentication extends Component {
    constructor(props){
        super(props)
    }

    

    render() {

        const theme = {
            "global": {
              "colors": {
                "background": {
                  "light": "#ffffff",
                  "dark": "#000000"
                }
              },
              "font": {
                "family": "-apple-system,\n         BlinkMacSystemFont, \n         \"Segoe UI\", \n         Roboto, \n         Oxygen, \n         Ubuntu, \n         Cantarell, \n         \"Fira Sans\", \n         \"Droid Sans\",  \n         \"Helvetica Neue\", \n         Arial, sans-serif,  \n         \"Apple Color Emoji\", \n         \"Segoe UI Emoji\", \n         \"Segoe UI Symbol\""
              }
            },
            "button": {
              "extend": [
                null
              ]
            }
          }
        return (
            <Grommet full theme={theme}>
                <Box fill="vertical" overflow="auto" align="center" flex="grow" pad="large" onClick={[{"screen":1,"label":"Screen","key":1}]} hoverIndicator>
                    <Stack fill anchor="center">
                    <Box align="center" justify="center" fill="horizontal" border={{"color":"active","style":"solid"}} round="large" margin={{"top":"large"}} background={{"dark":true,"color":"background"}} flex basis="xxsmall" elevation="none" pad="xsmall" direction="column">
                        <Box align="center" justify="center" fill="horizontal">
                        <Text size="xxlarge" weight="bold" margin="small" color="accent-4">
                            Get Started
                        </Text>
                        <Avatar align="center" flex={false} justify="center" overflow="hidden" round="full" size="medium" />
                        <Box align="baseline" justify="center" direction="row-responsive" fill basis="medium" flex>
                            <Box align="center" justify="center" pad="large" gap="none" flex="grow">
                            <Form>
                                <FormField label="Name" color="accent-4" required disabled={false}>
                                <TextInput type="text" placeholder="Full Name" icon={<FormEdit />} size="small" plain={false} reverse={false} />
                                </FormField>
                                <FormField label="Email" color="accent-4" required>
                                <TextInput type="text" placeholder="Email" icon={<Mail />} size="small" plain={false} reverse={false} />
                                </FormField>
                                <FormField label="Password" color="accent-4" required>
                                <TextInput type="password" placeholder="Password" icon={<Lock />} size="small" plain={false} reverse={false} />
                                </FormField>
                            </Form>
                            </Box>
                            <Box align="center" justify="center" pad="medium">
                            <FormField label="Terms and Services" color="accent-4" required>
                                <CheckBox label="By submitting this form you are hereby complying with Personal Reformer TOS" />
                            </FormField>
                            </Box>
                        </Box>
                        </Box>
                    </Box>
                    </Stack>
                </Box>
                </Grommet>
        )
    }
}

export default Authentication
import * as React from 'react'
import { connect } from 'react-redux'

import styled from '../../utils/styled'
import Page from '../../components/layout/Page'
import Container from '../../components/layout/Container'

import { ApplicationState, ConnectedReduxProps } from '../../store'
import { DriverInfo } from '../../store/driverInfo/types'
import { fetchRequest } from '../../store/driverInfo/actions'
import { Dispatch } from 'redux';

// Separate state props + dispatch props to their own interfaces.
interface PropsFromState {
  data: DriverInfo
  errors?: string
}

// We can use `typeof` here to map our dispatch types to the props, like so.
interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest
}

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps

class DriverInfoIndexPage extends React.Component<AllProps> {
  public componentDidMount() {
    this.props.fetchRequest()
  }

  public render() {
    return (
      <Page>
        <Container>
          <DriverInfoWrapper>
            Hello Buddy! <br />
            {this.renderData()}
          </DriverInfoWrapper>
        </Container>
      </Page>
    )
  }

  private renderData() {
    const { data } = this.props;
    const { errors } = this.props;
    return (
      <DivWrapper>
        <DriverInfoDetail>
          {data.birthdate}
          {errors}
        </DriverInfoDetail>
        <DriverName>
          {data.drivers.primary.firstName}
        </DriverName>
      </DivWrapper>
    )
  }
}

// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
const mapStateToProps = ({ driversInformation }: ApplicationState) => ({
  errors: driversInformation.errors,
  data: driversInformation.data
})

// mapDispatchToProps is especially useful for constraining our actions to the connected component.
// You can access these via `this.props`.
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchRequest: () => dispatch(fetchRequest())
})

// Now let's connect our component!
// With redux v4's improved typings, we can finally omit generics here.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DriverInfoIndexPage)

const DriverInfoWrapper = styled('div')`
  position: relative;
  max-width: ${props => props.theme.widths.md};
  margin: 0 auto;
  min-height: 200px;
`

const DivWrapper = styled('div')`
  position: relative;
  max-width: ${props => props.theme.widths.md};
  margin: 0 auto;
  min-height: 200px;
`

const DriverInfoDetail = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 66px;
`

const DriverName = styled('div')`
  flex: 1 1 auto;
  height: 100%;
  margin-left: 1rem;

  a {
    color: ${props => props.theme.colors.brand};
  }
`

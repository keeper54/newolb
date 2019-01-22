import * as React from 'react'
import { connect } from 'react-redux'

import styled from '../../utils/styled'
import Page from '../../components/layout/Page'
import Container from '../../components/layout/Container'
import DataTable from '../../components/layout/DataTable'
import LoadingOverlay from '../../components/data/LoadingOverlay'
import LoadingOverlayInner from '../../components/data/LoadingOverlayInner'
import LoadingSpinner from '../../components/data/LoadingSpinner'

import { ApplicationState, ConnectedReduxProps } from '../../store'
import { PokemonList } from '../../store/pokemon/types'
import { getPokemonList } from '../../store/pokemon/actions'
import { Dispatch } from 'redux';

// Separate state props + dispatch props to their own interfaces.
interface PropsFromState {
  loading: boolean
  data: PokemonList
  errors?: string
}

// We can use `typeof` here to map our dispatch types to the props, like so.
interface PropsFromDispatch {
  getPokemonList: typeof getPokemonList
}

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps

class PokemonIndexPage extends React.Component<AllProps> {
  public componentDidMount() {
    this.props.getPokemonList()
  }

  public render() {
    this.props.getPokemonList()
    const { loading } = this.props

    return (
      <Page>
        <Container>
          <TableWrapper>
            {loading && (
              <LoadingOverlay>
                <LoadingOverlayInner>
                  <LoadingSpinner />
                </LoadingOverlayInner>
              </LoadingOverlay>
            )}
            {this.renderData()}
          </TableWrapper>
        </Container>
      </Page>
    )
  }

  private renderData() {
    const { data } = this.props

    return (
      <DataTable
        columns={['id', 'Name', 'api url']}
        widths={['auto', 'auto', 'auto']}
      >
        {console.log(data)}
        {data.results.slice(0, 20).map((pokemon, i) => {

          return (
            <tr key={i}>
              <td>{i}</td>
              <td>{pokemon.name}</td>
              <td>{pokemon.url}</td>
            </tr>
          )
        })}
      </DataTable>
    )
  }
}

// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
const mapStateToProps = ({ pokemon }: ApplicationState) => ({
  loading: pokemon.loading,
  errors: pokemon.errors,
  data: pokemon.data
})

// mapDispatchToProps is especially useful for constraining our actions to the connected component.
// You can access these via `this.props`.
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchRequest: () => dispatch(getPokemonList())
})

// Now let's connect our component!
// With redux v4's improved typings, we can finally omit generics here.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndexPage)

const TableWrapper = styled('div')`
  position: relative;
  max-width: ${props => props.theme.widths.md};
  margin: 0 auto;
  min-height: 200px;
`

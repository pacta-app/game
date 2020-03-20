import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withTranslation } from 'react-i18next';

class Statutes extends Component {
  state = {
    name: "",
    contract: "",
    purpose: "",
    fee: "",
    shortname: "",
    url: "",
    period1: "",
    period2: ""
  };

  render() {
    // const { t } = this.props;

    return (
     <div id="statutes" >
        <Typography variant="h5" gutterBottom>
          Name und Sitz
        </Typography>
        <Typography variant="body2" gutterBottom>
          Unter dem Namen {this.state.name} besteht ein Verein im Sinne von Art. 60 ff ZGB, des Schweizerischen Zivilgesetzbuches (im folgenden ZGB genannt) mit Sitz in der Ethereum Blockchain im Internet, Vertrag Nummer {this.state.contract}. Dies ist die offizielle Kontaktstelle und das Publikationsorgan. Der Verein ist ausserdem über folgende URL erreichbar: https://pacta.app/{this.state.shortname}
        </Typography>
        <Typography variant="h5" gutterBottom>
          Vereinszweck
        </Typography>
        <Typography variant="body2" gutterBottom>
          {this.state.purpose}. Der Vereinszweck kann nicht verändert werden.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Mittel
        </Typography>
        <Typography variant="body2" gutterBottom>
          Zur Verfolgung des Vereinszweckes verfügt der Verein über die Beiträge der Mitglieder, welche von den Mitgliedern festgelegt werden. Der Mitgliederbeitrag kann nicht zurückerstattet werden. Darüber hinaus kann der Verein Zuwendungen aller Art entgegennehmen. Der Verein kann eine wirtschaftliche Tätigkeit ausüben, um Geld für den Vereinszweck zu erwirtschaften. Für Verbindlichkeiten haftet ausschliesslich das in der Blockchain vorhandene Vereinsvermögen.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Mitgliedschaft
        </Typography>
        <Typography variant="body2" gutterBottom>
          Stimmberechtigtes Mitglied kann jede natürliche oder juristische Person werden, die ein Interesse am Vereinszweck hat und den Beitrag bezahlt. Der Beitrag wird jährlich entrichtet und kann frühestens drei Monate vor Ablauf erneuert werden. Die Mitgliedschaft ist an den Schlüssel gebunden, mit dem der Mitgliederbeitrag bezahlt wurde, sie ist mit diesem Schlüssel übertragbar.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Erlöschen der Mitgliedschaft
        </Typography>
        <Typography variant="body2" gutterBottom>
          Die Mitgliedschaft erlischt:
            1. Wenn der Mitgliederbeitrag nicht vor Ablauf der Mitgliedschaft erneuert wurde
            2. Durch Ausschluss
            3. Durch Verlust des Schlüssels
        </Typography>
        <Typography variant="h6" gutterBottom>
          Ausschluss
        </Typography>
        <Typography variant="body2" gutterBottom>
          Ein Mitglied kann jederzeit ohne Grundangabe aus dem Verein ausgeschlossen werden. Der Vorstand fällt den Ausschlussentscheid abschliessend.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Organe des Vereins
        </Typography>
        <Typography variant="body2" gutterBottom>
        Die Organe des Vereins sind:
          1. Die Statuten
          2. Die Mitglieder
          3. Der Vorstand
        </Typography>
        <Typography variant="h6" gutterBottom>
          Die Statuten
        </Typography>
        <Typography variant="body2" gutterBottom>
          Der Verein wird als verteilte Anwendung (DAPP) in der Ethereum Blockchain betrieben. Es gelten die sich daraus ergebenden technischen Besonderheiten und Garantien.

          Die Einhaltung der Statuten wird so weit möglich kryptographisch abgesichert durch den Smart-Contract {this.state.contract} als DAPP in Ethereum sichergestellt. Die Statuten können nur im Rahmen der vorgesehenen Parameter oder durch ein verfügbares Update verändert werden. Über eine Anpassung der Statuten entscheiden die Mitglieder.

          Entscheide, die vom System durch Umsetzung der Statuten in elektronischen Regeln gefällt werden, gelten als letztinstanzlich entschieden und können nicht angefochten werden. Zugang zum System ist nur durch den definierten Vertrag möglich, aus dem sich die Statuten ableiten. Widerspricht der elektronische Vertrag diesen in menschlicher Sprache verfassten Statuten, so gilt der elektronische Vertrag.

          Transaktionen kosten ein sogenantes «Gas». Dieses wird dem Verursacher der Transaktion belastet. Das bedeutet insbesondere, dass Mitglieder die Kosten ihrer Aktionen selbst tragen.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Die Mitglieder
        </Typography>
        <Typography variant="body2" gutterBottom>
          Das oberste Organ des Vereins sind die Mitglieder, die ihren Willen durch elektronische Wahlen und Abstimmungen kund tun. Dies entspricht der gesetzlichen Vereinsversammlung nach Art. 64 ZGB. Beschlüsse werden mit einfacher Mehrheit gefasst. Der Verein wird verpflichtet durch Mitgliederbeschluss. Mitglieder haben jederzeit Einsicht in den aktuellen Stand der Vereinskasse.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Mitgliederbeschluss
        </Typography>
        <Typography variant="body2" gutterBottom>
          Einberufung:
          1. Einmal jährlich wird automatisch eine Vorstandswahl durchgeführt.
          2. Der Vorstand kann jederzeit eine Abstimmung einberufen.
          3. Ein Fünftel der Mitglieder können jederzeit eine Abstimmung oder Neuwahlen einberufen.
              1. Zu diesem Zweck reicht ein Mitglied einen Antrag ein, dem stattgegeben wird, wenn sich innert {this.state.period} Tagen ein Fünftel aller Mitglieder anschliessen.

          Ankündigung:
          1. Abstimmungen werden mindestens {this.state.period} Tage im Voraus im System festgelegt und können jederzeit abgefragt werden.
          2. Wahlen werden mindestens {this.state.period} Tage im Voraus im System festgelegt und können jederzeit abgefragt werden.
          3. Die Anmeldefrist für Kandidaturen beträgt bis {this.state.period} Tage vor der Wahl.
          4. Die Stimmabgabe ist möglich ab {this.state.period} Tagen vor einer Wahl oder Abstimmung, bis zum Tag der Wahl oder Abstimmung.
          5. Ab dem Tag der Wahl oder Abstimmung ist keine Stimmabgabe mehr möglich und das Ergebnis kann abgefragt werden.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Der Vorstand
        </Typography>
        <Typography variant="body2" gutterBottom>
          Der Vorstand besteht aus mindestens einem Mitglied. Er handelt auf Weisung der Mitglieder im Sinne des Vereinszwecks. Der Vorstand entscheidet durch elektronische Abstimmung mit Mehrheitsentscheid. Jedes Vorstandsmitglied kann einen Antrag zur Abstimmung vorlegen. Die Ankündigungsfrist beträgt {this.state.period} Tage, danach läuft eine Abstimmung von {this.state.period} Tagen. Der Verein wird verpflichtet durch Vorstandsbeschluss. Der Vorstand entscheidet über finanzielle Transaktionen. Vorstandsmitglieder haben Einsicht in sämtliche Transaktionen des Vereins.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Auflösung
        </Typography>
        <Typography variant="body2" gutterBottom>
          Der Verein wird aufgelöst:
          1. Durch Entscheid der Mitglieder
          2. Automatisch, wenn kein Vorständ gewählt wird
          3. Wenn das Vereinsvermögen in der Blockchain auf Null gesunken ist

          Ab Start der Auflösung:
          1. Werden keine neuen Mitglieder mehr aufgenommen.
          2. Haben Gläubiger 30 Tage Zeit, ihre Forderungen einzureichen.
          3. Der verbleibende Vorstand ist verpflichtet, alle Verbindlichkeiten innert 60 Tagen zu prüfen und zu begleichen.
          4. Reicht das verbleibende Geld nicht für alle Verbindlichkeiten, so ist der Vorstand verpflichtet, es anteilmässig entsprechend der Höhe der unbestrittenen Forderungen den Gläubigern zu verteilen.
          5. Nach 60 Tagen wird das verbleibende Vereinsvermögen gleichmässig unter den Mitgliedern verteilt.
        </Typography>
     </div>
    );
  }
}

export default withTranslation()(Statutes);

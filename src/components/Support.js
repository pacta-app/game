import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import { withTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";

class Support extends Component {
  render() {
    const { t } = this.props;
    const faq = [
      {
        label: "support.group.general",
        questions: [
          {
            q: "support.1.q",
            a: "support.1.a"
          },
          {
            q: "support.2.q",
            a: "support.2.a"
          },
          {
            q: "support.3.q",
            a: "support.3.a"
          },
          {
            q: "support.10.q",
            a: "support.10.a"
          },
          {
            q: "support.11.q",
            a: "support.11.a"
          },
          {
            q: "support.12.q",
            a: "support.12.a"
          }
        ]
      },
      {
        label: "support.group.costs",
        questions: [
          {
            q: "support.4.q",
            a: "support.4.a"
          },
          {
            q: "support.5.q",
            a: "support.5.a"
          },
          {
            q: "support.6.q",
            a: "support.6.a"
          }
        ]
      },
      {
        label: "support.group.technical",
        questions: [
          {
            q: "support.7.q",
            a: "support.7.a"
          },
          {
            q: "support.8.q",
            a: "support.8.a"
          },
          {
            q: "support.9.q",
            a: "support.9.a"
          },
          {
            q: "support.13.q",
            a: "support.13.a"
          },
          {
            q: "support.14.q",
            a: "support.14.a"
          }
        ]
      }
    ];

    return (
      <Grid item xs={12} md={9} className="defaultpadding">
        <Typography variant="h4" gutterBottom>
          {t("support.faq.title")}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {t("support.faq.body")} <br />
          <Button
            variant="outlined"
            color="primary"
            href="mailto:info@pacta.app"
          >
            Send email
          </Button>
        </Typography>
        {faq.map((group, index1) => (
          <Box key={index1} my={2}>
            <Typography variant="body1" gutterBottom>
              {t(group.label)}
            </Typography>
            {group.questions.map((j, index2) => (
              <ExpansionPanel key={index2}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="body1">{t(j.q)}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography variant="body2">
                    <ReactMarkdown
                      source={t(j.a)}
                      unwrapDisallowed="true"
                      linkTarget="_blank"
                      className="markdown"
                      parserOptions={{
                        footnotes: false,
                        commonmark: true
                      }}
                    />
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            ))}
          </Box>
        ))}
      </Grid>
    );
  }
}

export default withTranslation()(withRouter(Support));
